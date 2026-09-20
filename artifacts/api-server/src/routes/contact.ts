import { Router, type IRouter } from "express";
import { dataStore } from "../lib/dbFallback";
import { jwtVerify } from "jose";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      res.status(400).json({ error: "Invalid parameter types" });
      return;
    }

    const sanitizedName = name.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedEmail = email.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedSubject = subject.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedMessage = message.trim().replace(/<[^>]*>/g, '').slice(0, 1000);

    if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Try to extract userId if token is provided
    let userId: string | undefined = undefined;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '');
      const secretKey = process.env.SUPABASE_JWT_SECRET;
      if (secretKey) {
        try {
          const secret = new TextEncoder().encode(secretKey);
          const { payload } = await jwtVerify(token, secret, {
            algorithms: ['HS256'],
            audience: 'authenticated',
          });
          userId = payload.sub;
        } catch (e) {
          logger.warn("Optional JWT verification failed for contact route");
        }
      } else {
        // Fallback parse without verification for local development
        try {
          const parts = token.split('.');
          if (parts.length === 3) {
            const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf-8'));
            userId = payload.sub;
          }
        } catch (e) {}
      }
    }

    const submission = await dataStore.saveContactSubmission({
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      userId,
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'ordinance37@gmail.com',
            subject: `New Contact Submission: ${sanitizedSubject}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 12px;">
                <h2 style="color: #7c3aed;">New Contact Message Received</h2>
                <p><strong>Name:</strong> ${sanitizedName}</p>
                <p><strong>Email:</strong> ${sanitizedEmail}</p>
                <p><strong>Subject:</strong> ${sanitizedSubject}</p>
                <p><strong>Message:</strong></p>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap;">${sanitizedMessage}</div>
                <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                <p style="font-size: 11px; color: #999;">Sent automatically from OrdStudio contact system.</p>
              </div>
            `
          })
        });
        logger.info("Sent contact submission email via Resend to ordinance37@gmail.com");
      } catch (emailErr) {
        logger.error({ err: emailErr }, "Failed to send contact notification email via Resend");
      }
    }

    res.status(201).json({ success: true, submission });
  } catch (error) {
    logger.error({ err: error }, "Failed to save contact submission");
    res.status(500).json({ error: "Failed to submit contact request" });
  }
});

export default router;
