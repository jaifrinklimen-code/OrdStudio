export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const hasKey0 = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0);
  const hasKey1 = Boolean(process.env.GEMINI_API_KEY_1 && process.env.GEMINI_API_KEY_1.trim().length > 0);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    status: 'healthy',
    api: 'Vercel Serverless Function',
    endpoint: '/api/content/generate',
    environment: {
      GEMINI_API_KEY: hasKey0 ? 'PRESENT' : 'MISSING',
      GEMINI_API_KEY_1: hasKey1 ? 'PRESENT' : 'MISSING',
    }
  }));
}
