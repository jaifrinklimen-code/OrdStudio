/**
 * Vercel Serverless Function: /api/contact
 *
 * Receives contact form submissions, validates data, enforces rate limits,
 * and sends an email notification via Resend with clean HTML formatting.
 * Never leaks API keys or internal stack traces to the client.
 */

// In-memory rate limiting map for serverless execution instance
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per minute per IP

function isRateLimited(clientIp) {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIp);

  if (!clientData || (now - clientData.startTime) > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientIp, { count: 1, startTime: now });
    return false;
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  clientData.count += 1;
  return false;
}

export default async function handler(req, res) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  // Rate Limiting by IP / Forwarded IP
  const clientIp = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown')
    .toString()
    .split(',')[0]
    .trim();

  if (isRateLimited(clientIp)) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Too many requests. Please wait a moment before trying again.' }));
    return;
  }

  try {
    let body = req.body;
    if (!body && req.readable) {
      try {
        const buffers = [];
        for await (const chunk of req) {
          buffers.push(chunk);
        }
        const raw = Buffer.concat(buffers).toString('utf8');
        if (raw) {
          body = JSON.parse(raw);
        }
      } catch (e) {
        // Handled below if body is invalid
      }
    }

    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
        return;
      }
    }

    if (!body || typeof body !== 'object') {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Missing request body' }));
      return;
    }

    const { name, email, subject, message } = body;

    // Strict parameter validation
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'All fields (name, email, subject, message) are required' }));
      return;
    }

    const sanitizedName = name.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedEmail = email.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedSubject = subject.trim().replace(/<[^>]*>/g, '').slice(0, 150);
    const sanitizedMessage = message.trim().replace(/<[^>]*>/g, '').slice(0, 2000);

    if (!sanitizedName) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name is required' }));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Please enter a valid email address' }));
      return;
    }

    if (!sanitizedSubject) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Subject is required' }));
      return;
    }

    if (!sanitizedMessage) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Message cannot be empty' }));
      return;
    }

    // Support configured Resend API key environment variable
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || process.env.RESEND_TO_EMAIL || 'ordinance37@gmail.com';

    if (resendApiKey) {
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
          subject: `[OrdStudio Contact] ${sanitizedSubject} — from ${sanitizedName}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head><meta charset="utf-8" /></head>
              <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0d0d12; color: #ffffff; padding: 24px; margin: 0;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #16161f; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px;">
                  <div style="display: flex; align-items: center; margin-bottom: 24px;">
                    <h2 style="margin: 0; color: #a855f7; font-size: 22px; font-weight: 700;">OrdStudio Contact Message</h2>
                  </div>
                  <div style="margin-bottom: 20px;">
                    <p style="margin: 4px 0; color: rgba(255,255,255,0.6); font-size: 13px; text-transform: uppercase;">From</p>
                    <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">${sanitizedName} &lt;<a href="mailto:${sanitizedEmail}" style="color: #c084fc; text-decoration: none;">${sanitizedEmail}</a>&gt;</p>
                  </div>
                  <div style="margin-bottom: 20px;">
                    <p style="margin: 4px 0; color: rgba(255,255,255,0.6); font-size: 13px; text-transform: uppercase;">Subject</p>
                    <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">${sanitizedSubject}</p>
                  </div>
                  <div style="margin-bottom: 24px;">
                    <p style="margin: 4px 0; color: rgba(255,255,255,0.6); font-size: 13px; text-transform: uppercase;">Message</p>
                    <div style="background-color: #0a0a0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 16px; color: #e4e4e7; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</div>
                  </div>
                  <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0;" />
                  <p style="margin: 0; color: rgba(255,255,255,0.4); font-size: 11px;">Sent from the OrdStudio Contact Form &bull; ordstudio.com</p>
                </div>
              </body>
            </html>
          `
        })
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text().catch(() => '');
        console.error('Resend API error:', emailResponse.status, errorText);
        res.statusCode = 502;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Email service failed to deliver message. Please try again.' }));
        return;
      }
    }

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you shortly.',
      submission: {
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        createdAt: new Date().toISOString()
      }
    }));
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to submit contact request. Please try again.' }));
  }
}
