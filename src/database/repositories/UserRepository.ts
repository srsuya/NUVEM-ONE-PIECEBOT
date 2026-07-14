/**
 * Repositório para operações de usuários
 */

import { IUser } from "@types/user";
import { get, all, run } from "../connection";
import logger from "@utils/logger";
import { v4 as uuid } from "uuid";

export class UserRepository {
  /**
   * Cria ou obtém um usuário
   */
  static async findOrCreate(jid: string, name: string): Promise<IUser> {
    let user = await this.findByJID(jid);

    if (!user) {
      user = await this.create(jid, name);
    }

    return user;
  }

  /**
   * Obtém um usuário pelo JID
   */
  static async findByJID(jid: string): Promise<IUser | null> {
    try {
      const user = await get(
        "SELECT * FROM users WHERE jid = ?",
        [jid]
      );
      return user || null;
    } catch (error) {
      logger.error(`Erro ao buscar usuário: ${error}`);
      return null;
    }
  }

  /**
   * Cria um novo usuário
   */
  static async create(jid: string, name: string): Promise<IUser> {
    const id = uuid();
    const now = Date.now();

    await run(
      `INSERT INTO users (id, jid, name, balance, level, experience, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, jid, name, 0, 1, 0, now, now]
    );

    return this.findByJID(jid) as Promise<IUser>;
  }

  /**
   * Atualiza o saldo do usuário
   */
  static async updateBalance(
    jid: string,
    amount: number
  ): Promise<boolean> {
    try {
      await run(
        "UPDATE users SET balance = balance + ?, updated_at = ? WHERE jid = ?",
        [amount, Date.now(), jid]
      );
      return true;
    } catch (error) {
      logger.error(`Erro ao atualizar saldo: ${error}`);
      return false;
    }
  }

  /**
   * Obtém o ranking de usuários
   */
  static async getTopUsers(limit: number = 10): Promise<IUser[]> {
    try {
      return await all(
        "SELECT * FROM users ORDER BY balance DESC, level DESC LIMIT ?",
        [limit]
      );
    } catch (error) {
      logger.error(`Erro ao buscar top usuários: ${error}`);
      return [];
    }
  }

  /**
   * Adiciona warning ao usuário
   */
  static async addWarning(jid: string): Promise<number> {
    try {
      await run(
        "UPDATE users SET warnings = warnings + 1, updated_at = ? WHERE jid = ?",
        [Date.now(), jid]
      );

      const user = await this.findByJID(jid);
      return user?.warnings || 0;
    } catch (error) {
      logger.error(`Erro ao adicionar warning: ${error}`);
      return 0;
    }
  }

  /**
   * Reseta warnings do usuário
   */
  static async resetWarnings(jid: string): Promise<boolean> {
    try {
      await run(
        "UPDATE users SET warnings = 0, updated_at = ? WHERE jid = ?",
        [Date.now(), jid]
      );
      return true;
    } catch (error) {
      logger.error(`Erro ao resetar warnings: ${error}`);
      return false;
    }
  }
}
