import path from "path";

// Clear existing system/terminal environment keys to prevent interference
delete process.env.GEMINI_API_KEY;
delete process.env.ANTHROPIC_API_KEY;

try {
  // @ts-ignore
  if (typeof process.loadEnvFile === 'function') {
    // @ts-ignore
    process.loadEnvFile();
  }
} catch (e) {}

try {
  // @ts-ignore
  if (typeof process.loadEnvFile === 'function') {
    // @ts-ignore
    process.loadEnvFile(path.resolve(process.cwd(), "..", "..", ".env"));
  }
} catch (e) {}

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
