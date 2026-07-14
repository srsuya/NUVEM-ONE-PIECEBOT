/**
 * Gerenciador de conexão com banco de dados
 */

import sqlite3 from "sqlite3";
import logger from "@utils/logger";
import { env } from "@config/environment";
import path from "path";
import fs from "fs";

let db: any = null;

/**
 * Inicializa a conexão com o banco de dados
 */
export async function initializeDatabase(): Promise<void> {
  try {
    const dbPath = env.databasePath;
    const dbDir = path.dirname(dbPath);

    // Cria o diretório se não existir
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }

    return new Promise((resolve, reject) => {
      db = new (sqlite3.verbose()).Database(dbPath, async (err: any) => {
        if (err) {
          logger.error(`Erro ao conectar ao banco de dados: ${err.message}`);
          reject(err);
        } else {
          logger.info(`Banco de dados SQLite iniciado em ${dbPath}`);
          await createTables();
          resolve();
        }
      });
    });
  } catch (error) {
    logger.error(`Erro ao inicializar banco de dados: ${error}`);
    throw error;
  }
}

/**
 * Cria as tabelas necessárias
 */
async function createTables(): Promise<void> {
  const tables = [
    `
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      jid TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      balance INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      experience INTEGER DEFAULT 0,
      status TEXT DEFAULT 'active',
      is_banned BOOLEAN DEFAULT 0,
      ban_reason TEXT,
      is_vip BOOLEAN DEFAULT 0,
      vip_expire INTEGER,
      warnings INTEGER DEFAULT 0,
      last_daily INTEGER,
      last_weekly INTEGER,
      created_at INTEGER,
      updated_at INTEGER
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS groups (
      id TEXT PRIMARY KEY,
      jid TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      owner TEXT NOT NULL,
      settings TEXT,
      created_at INTEGER,
      updated_at INTEGER
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS inventory (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      item_name TEXT NOT NULL,
      quantity INTEGER DEFAULT 1,
      rarity TEXT DEFAULT 'common',
      created_at INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
    `,
  ];

  for (const table of tables) {
    try {
      await run(table);
    } catch (error) {
      logger.error(`Erro ao criar tabela: ${error}`);
    }
  }
}

/**
 * Executa uma query
 */
export async function run(
  sql: string,
  params: any[] = []
): Promise<any> {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err: any) {
      if (err) {
        logger.error(`Erro na query: ${err.message}`);
        reject(err);
      } else {
        resolve({ id: this.lastID, changes: this.changes });
      }
    });
  });
}

/**
 * Executa uma query e retorna um resultado
 */
export async function get(
  sql: string,
  params: any[] = []
): Promise<any> {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err: any, row: any) => {
      if (err) {
        logger.error(`Erro na query: ${err.message}`);
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

/**
 * Executa uma query e retorna todos os resultados
 */
export async function all(
  sql: string,
  params: any[] = []
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err: any, rows: any[]) => {
      if (err) {
        logger.error(`Erro na query: ${err.message}`);
        reject(err);
      } else {
        resolve(rows || []);
      }
    });
  });
}

/**
 * Fecha a conexão com o banco
 */
export async function closeDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (db) {
      db.close((err: any) => {
        if (err) {
          logger.error(`Erro ao fechar banco de dados: ${err.message}`);
          reject(err);
        } else {
          logger.info("Banco de dados fechado com sucesso");
          resolve();
        }
      });
    } else {
      resolve();
    }
  });
}

export function getDatabase() {
  return db;
}
