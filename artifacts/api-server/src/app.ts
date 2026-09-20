import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import crypto from "crypto";
import rateLimit from "express-rate-limit";
import pinoHttp from "pino-http";
import path from "path";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// ── Nonce Generation for CSP ─────────────────────────────────────────────────
// Generate a unique nonce per request for inline scripts/styles
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString('base64');
  next();
});

// ── Security Headers ───────────────────────────────────────────────────────
app.use((req: Request, res: Response, next: NextFunction) => {
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", `'nonce-${res.locals.cspNonce}'`],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: [
          "'self'",
          "https://pilyujeitneeyurdgijw.supabase.co",
          "https://*.supabase.co",
          "wss://*.supabase.co",
          "https://image.pollinations.ai",
        ],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    // Prevent MIME type sniffing
    noSniff: true,
    // Prevent clickjacking
    frameguard: { action: 'deny' },
    // Hide X-Powered-By header
    hidePoweredBy: true,
    // Enforce HSTS in production
    hsts: {
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true,
    },
    // Prevent cross-origin info leaks
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    // Cross-Origin policies
    crossOriginEmbedderPolicy: false, // Keep false for external images
    crossOriginOpenerPolicy: { policy: 'same-origin' },
    crossOriginResourcePolicy: { policy: 'cross-origin' }, // Allow external resources
  })(req, res, next);
});

// ── CORS — Restrict to known origins ───────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3001',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3001',
  process.env.FRONTEND_URL || '',
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (server-to-server, mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Blocked by CORS policy'), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  // Allow the custom CSRF header
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// ── CSRF Protection via Custom Header Check ────────────────────────────────
// For state-changing requests (POST/PUT/DELETE), require the X-Requested-With
// header. Browsers will not send this header on cross-origin requests without
// a CORS preflight, which our CORS config above would reject.
app.use((req: Request, res: Response, next: NextFunction) => {
  const safeMethods = ['GET', 'HEAD', 'OPTIONS'];
  if (safeMethods.includes(req.method.toUpperCase())) {
    return next();
  }

  const xRequestedWith = req.headers['x-requested-with'];
  if (!xRequestedWith) {
    logger.warn({ method: req.method, url: req.url }, 'CSRF check failed: missing X-Requested-With header');
    res.status(403).json({ error: 'Forbidden: missing security header' });
    return;
  }

  next();
});

// ── Request Logging ────────────────────────────────────────────────────────
app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

// ── Body Parsing with Size Limits ──────────────────────────────────────────
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ── Global Rate Limiter ────────────────────────────────────────────────────
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});
app.use(globalLimiter);

// ── Strict Rate Limiter for AI Endpoints ───────────────────────────────────
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'AI generation rate limit exceeded. Please try again later.' },
});
app.use('/api/content/generate', aiLimiter);
app.use('/api/stickers/generate', aiLimiter);

// ── API Routes ─────────────────────────────────────────────────────────────
app.use("/api", router);

// ── Production: serve the built frontend ───────────────────────────────────
const frontendDist = path.resolve(__dirname, "..", "..", "creative-studio", "dist", "public");
app.use(express.static(frontendDist));

// ── SPA catch-all ──────────────────────────────────────────────────────────
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"), (err) => {
    if (err) {
      res.status(404).json({ error: "Frontend not built yet." });
    }
  });
});

// ── Global Error Handler ───────────────────────────────────────────────────
// Never leak stack traces or internal details
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  logger.error({ err }, 'Unhandled server error');
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
