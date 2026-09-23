import path from "path";

// Load environment variables from local .env files if present (without overwriting platform env vars)
const envCandidates = [
  path.resolve(process.cwd(), ".env"),
  path.resolve(process.cwd(), "..", "..", ".env"),
  path.resolve(__dirname, "..", "..", ".env"),
  path.resolve(__dirname, "..", "..", "..", ".env"),
];
for (const envPath of envCandidates) {
  try {
    // @ts-ignore
    if (typeof process.loadEnvFile === 'function') {
      // @ts-ignore
      process.loadEnvFile(envPath);
    }
  } catch (e) {}
}


import app from "./app";
import { logger } from "./lib/logger";

const port = Number(process.env["PORT"] || "3001");

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${process.env["PORT"]}"`);
}

process.on('uncaughtException', (err) => {
  logger.error({ err }, 'Uncaught Exception in API Server');
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error({ reason, promise }, 'Unhandled Rejection in API Server');
});

app.listen(port, "127.0.0.1", (err) => {
  if (err) {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  }

  logger.info({ port, host: "127.0.0.1" }, "Server listening");
});
