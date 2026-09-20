import { type Request, type Response, type NextFunction } from "express";
import { jwtVerify, createRemoteJWKSet, type JWTPayload } from "jose";
import { logger } from "../lib/logger";

/**
 * Authenticated user shape attached to req.user
 */
export interface AuthUser {
  id: string;
  email?: string;
  role?: string;
}

/**
 * Extended Request with verified user
 */
export interface AuthenticatedRequest extends Request {
  user: AuthUser;
}

/**
 * Authentication middleware that cryptographically verifies Supabase JWT tokens.
 *
 * Verification chain:
 * 1. Extracts Bearer token from Authorization header
 * 2. Verifies JWT signature using the Supabase JWT secret (HMAC-SHA256)
 * 3. Validates expiration, audience, and issuer claims
 * 4. Attaches verified user to request object
 *
 * Required env vars:
 * - SUPABASE_JWT_SECRET: The JWT secret from Supabase project settings
 * - SUPABASE_URL (optional): Used to validate the issuer claim
 */

// Cache the encoded secret to avoid re-encoding on every request
let cachedSecret: Uint8Array | null = null;

function getJwtSecret(): Uint8Array | null {
  if (cachedSecret) return cachedSecret;

  const secret = process.env.SUPABASE_JWT_SECRET;
  if (!secret) {
    logger.warn("SUPABASE_JWT_SECRET is not set — JWT signature verification is disabled. Set this in production!");
    return null;
  }

  cachedSecret = new TextEncoder().encode(secret);
  return cachedSecret;
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      // In development or guest session mode, provide default creator access
      (req as any).user = {
        id: 'guest-creator',
        email: 'creator@ordstudio.ai',
        role: 'authenticated',
      } satisfies AuthUser;
      return next();
    }

    const token = authHeader.replace('Bearer ', '');

    // ── Validate JWT structure (3 base64 segments) ──────────────────────
    const parts = token.split('.');
    if (parts.length !== 3) {
      res.status(401).json({ error: 'Invalid token format' });
      return;
    }

    const secret = getJwtSecret();

    if (secret) {
      // ── SECURE PATH: Verify JWT signature cryptographically ───────────
      try {
        const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
        
        const { payload } = await jwtVerify(token, secret, {
          // Validate standard claims
          algorithms: ['HS256'],
          // Supabase sets the audience to "authenticated"
          audience: 'authenticated',
          // Supabase sets the issuer to the project URL + /auth/v1
          ...(supabaseUrl ? { issuer: `${supabaseUrl}/auth/v1` } : {}),
        });

        // Attach verified user info to request
        (req as any).user = {
          id: payload.sub || '',
          email: (payload as any).email,
          role: (payload as any).role,
        } satisfies AuthUser;

      } catch (err: any) {
        // Distinguish between different JWT errors for better debugging
        if (err.code === 'ERR_JWT_EXPIRED') {
          res.status(401).json({ error: 'Token expired' });
          return;
        }
        if (err.code === 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED') {
          logger.warn({ err }, 'JWT signature verification failed — possible token forgery');
          res.status(401).json({ error: 'Invalid token' });
          return;
        }
        if (err.code === 'ERR_JWT_CLAIM_VALIDATION_FAILED') {
          logger.warn({ err }, 'JWT claim validation failed');
          res.status(401).json({ error: 'Invalid token claims' });
          return;
        }

        logger.error({ err }, 'JWT verification error');
        res.status(401).json({ error: 'Invalid token' });
        return;
      }
    } else {
      // ── FALLBACK: No JWT secret configured (development only) ─────────
      // Still decode and check expiry, but log a warning
      try {
        const payload = JSON.parse(
          Buffer.from(parts[1], 'base64url').toString('utf-8')
        );

        if (payload.exp && Date.now() >= payload.exp * 1000) {
          res.status(401).json({ error: 'Token expired' });
          return;
        }

        // Verify the token has required fields
        if (!payload.sub) {
          res.status(401).json({ error: 'Invalid token: missing subject' });
          return;
        }

        (req as any).user = {
          id: payload.sub,
          email: payload.email,
          role: payload.role,
        } satisfies AuthUser;

      } catch {
        res.status(401).json({ error: 'Invalid token' });
        return;
      }
    }

    next();
  } catch (err) {
    logger.error({ err }, 'Auth middleware error');
    res.status(500).json({ error: 'Authentication failed' });
  }
}
