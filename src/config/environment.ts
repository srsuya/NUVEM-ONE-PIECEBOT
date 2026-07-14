/**
 * Configuração de variáveis de ambiente
 */

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const env = {
  // Bot
  botName: process.env.BOT_NAME || "Nuvem Bot",
  botVersion: process.env.BOT_VERSION || "1.0.0",
  nodeEnv: (process.env.NODE_ENV || "development") as
    | "development"
    | "production",

  // Paths
  sessionFolder: process.env.SESSION_FOLDER || "./storage/sessions",
  authFolder: process.env.AUTH_FOLDER || "./storage/auth",
  tempFolder: process.env.TEMP_FOLDER || "./temp",
  logFile: process.env.LOG_FILE || "./logs/bot.log",

  // Database
  databaseType: (process.env.DATABASE_TYPE || "sqlite") as "sqlite" | "postgres",
  databasePath: process.env.DATABASE_PATH || "./storage/database.db",
  postgresHost: process.env.POSTGRES_HOST || "localhost",
  postgresPort: parseInt(process.env.POSTGRES_PORT || "5432"),
  postgresDatabase: process.env.POSTGRES_DATABASE || "nuvem_bot",
  postgresUser: process.env.POSTGRES_USER || "postgres",
  postgresPassword: process.env.POSTGRES_PASSWORD || "",

  // API
  apiPort: parseInt(process.env.API_PORT || "3000"),
  apiHost: process.env.API_HOST || "0.0.0.0",
  enableApi: process.env.ENABLE_API === "true",
  enableWebSocket: process.env.ENABLE_WEBSOCKET === "true",

  // Logging
  logLevel: process.env.LOG_LEVEL || "info",

  // Features
  enableAntiBot: process.env.ENABLE_ANTIBOT === "true",
  enableAntiSpam: process.env.ENABLE_ANTISPAM === "true",
  enableAntiFlood: process.env.ENABLE_ANTIFLOOD === "true",
  enableAntiLink: process.env.ENABLE_ANTILINK === "true",
  enableAntiTrava: process.env.ENABLE_ANTITRAVA === "true",
  enableWelcome: process.env.ENABLE_WELCOME === "true",

  // Backup
  enableBackup: process.env.ENABLE_BACKUP === "true",
  backupInterval: parseInt(process.env.BACKUP_INTERVAL || "86400000"),
  backupFolder: process.env.BACKUP_FOLDER || "./storage/backups",

  // Admin
  adminOnlyCommands: process.env.ADMIN_ONLY_COMMANDS === "true",
  prefix: process.env.PREFIX || "!",
  ownerIds: (process.env.OWNER_IDS || "").split(",").filter(Boolean),

  // Security
  encryptionKey: process.env.ENCRYPTION_KEY || "default-key-change-in-production",
};

export type Environment = typeof env;
