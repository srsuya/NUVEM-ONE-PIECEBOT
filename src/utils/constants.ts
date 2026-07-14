/**
 * Constantes da aplicação
 */

export const PREFIX = process.env.PREFIX || "!";
export const OWNER_IDS = (process.env.OWNER_IDS || "").split(",").filter(Boolean);
export const BOT_NAME = process.env.BOT_NAME || "Nuvem Bot";
export const BOT_VERSION = process.env.BOT_VERSION || "1.0.0";

// Timeouts em ms
export const SPAM_TIMEOUT = 5000; // 5 segundos
export const FLOOD_TIMEOUT = 10000; // 10 segundos
export const DAILY_TIMEOUT = 86400000; // 24 horas
export const WEEKLY_TIMEOUT = 604800000; // 7 dias

// Limites
export const MAX_WARNINGS = 3;
export const DAILY_REWARD = 500;
export const WEEKLY_REWARD = 3000;

// RPG One Piece
export const DEVIL_FRUITS = [
  { name: "Gomu Gomu no Mi", effect: "Elasticidade" },
  { name: "Hito Hito no Mi", effect: "Humanoid" },
  { name: "Bara Bara no Mi", effect: "Fragmentação" },
  { name: "Sube Sube no Mi", effect: "Suavidade" },
  { name: "Buku Buku no Mi", effect: "Bolsos" },
];
