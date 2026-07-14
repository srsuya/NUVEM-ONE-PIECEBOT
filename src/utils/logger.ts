import pino from "pino";
import path from "path";
import fs from "fs";

const logDir = path.join(process.cwd(), "logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

/**
 * Logger configurado com Pino
 */
const logger = pino(
  {
    level: process.env.LOG_LEVEL || "info",
    transport:
      process.env.NODE_ENV === "development"
        ? {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: "SYS:standard",
              ignore: "pid,hostname",
            },
          }
        : undefined,
  },
  pino.transport({
    target: "pino/file",
    options: {
      destination: path.join(logDir, "bot.log"),
      mkdir: true,
    },
  })
);

export default logger;
