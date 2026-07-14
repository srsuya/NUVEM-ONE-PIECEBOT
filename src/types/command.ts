import { IMessage } from "./message";

/**
 * Interface base para todos os comandos
 */
export interface ICommand {
  /**
   * Nome do comando
   */
  name: string;

  /**
   * Descrição do comando
   */
  description: string;

  /**
   * Aliases do comando
   */
  aliases?: string[];

  /**
   * Categoria do comando
   */
  category: CommandCategory;

  /**
   * Requer permissão de administrador
   */
  adminOnly?: boolean;

  /**
   * Requer ser o dono do bot
   */
  ownerOnly?: boolean;

  /**
   * Precisa de argumentos
   */
  needsArgs?: boolean;

  /**
   * Usa grupo
   */
  groupOnly?: boolean;

  /**
   * Executa o comando
   */
  execute(message: IMessage, args: string[]): Promise<void>;
}

export enum CommandCategory {
  ADMIN = "admin",
  OWNER = "owner",
  RPG = "rpg",
  ECONOMY = "economy",
  GENERAL = "general",
  FUN = "fun",
  UTILITY = "utility",
  MODERATION = "moderation",
  GAMES = "games",
}
