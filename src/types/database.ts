/**
 * Interface para operações do banco de dados
 */
export interface IDatabase {
  /**
   * Inicializa o banco de dados
   */
  initialize(): Promise<void>;

  /**
   * Fecha a conexão com o banco
   */
  close(): Promise<void>;

  /**
   * Executa uma query
   */
  query(sql: string, params?: any[]): Promise<any>;

  /**
   * Executa múltiplas queries
   */
  transaction(callback: () => Promise<void>): Promise<void>;
}

export interface IDatabaseConfig {
  type: "sqlite" | "postgres";
  path?: string; // Para SQLite
  host?: string;
  port?: number;
  database?: string;
  username?: string;
  password?: string;
}
