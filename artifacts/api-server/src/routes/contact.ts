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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      res.status(400).json({ error: "Please enter a valid email address" });
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
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || process.env.RESEND_TO_EMAIL || 'ordinance37@gmail.com';

    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: toEmail,
            reply_to: sanitizedEmail,
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
        if (!emailResponse.ok) {
          const errText = await emailResponse.text().catch(() => '');
          logger.error({ status: emailResponse.status, errorText: errText }, "Resend API delivery failure");
          res.status(502).json({ error: "Email service failed to deliver message. Please try again." });
          return;
        }
        logger.info("Sent contact submission email via Resend");
      } catch (emailErr) {
        logger.error({ err: emailErr }, "Failed to send contact notification email via Resend");
        res.status(502).json({ error: "Email service error. Please try again later." });
        return;
      }
    }

    res.status(201).json({ success: true, submission });
  } catch (error) {
    logger.error({ err: error }, "Failed to save contact submission");
    res.status(500).json({ error: "Failed to submit contact request" });
  }
});

export default router;
