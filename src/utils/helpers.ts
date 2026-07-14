/**
 * Funções auxiliares do bot
 */

import logger from "./logger";

/**
 * Valida se um ID é de um owner
 */
export function isOwner(jid: string): boolean {
  const owners = process.env.OWNER_IDS?.split(",").filter(Boolean) || [];
  return owners.includes(jid);
}

/**
 * Extrai argumentos de uma mensagem
 */
export function extractArgs(text: string, prefix: string): string[] {
  const withoutPrefix = text.slice(prefix.length).trim();
  return withoutPrefix.split(/\s+/);
}

/**
 * Formata um número como moeda
 */
export function formatCurrency(amount: number): string {
  return `💰 ${amount.toLocaleString("pt-BR")}`;
}

/**
 * Gera um número aleatório entre min e max
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Delay em ms
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Sanitiza texto para evitar injeção
 */
export function sanitizeText(text: string): string {
  return text.replace(/[<>"']/g, "");
}

/**
 * Valida um ID do WhatsApp
 */
export function isValidJID(jid: string): boolean {
  return /^\d+@(s\.)?whatsapp\.net$/.test(jid);
}

/**
 * Obtém o nome do usuário de um JID
 */
export function getUsernameFromJID(jid: string): string {
  return jid.split("@")[0];
}
