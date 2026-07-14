import { IMessage } from "./message";

/**
 * Interface para eventos do bot
 */
export interface IEvent {
  /**
   * Nome do evento
   */
  name: EventType;

  /**
   * Função chamada quando o evento é disparado
   */
  execute(...args: any[]): Promise<void>;
}

export enum EventType {
  MESSAGE_CREATE = "message.create",
  MESSAGE_DELETE = "message.delete",
  MESSAGE_UPDATE = "message.update",
  GROUP_JOIN = "group.join",
  GROUP_LEAVE = "group.leave",
  GROUP_UPDATE = "group.update",
  USER_JOIN = "user.join",
  USER_LEAVE = "user.leave",
  BOT_READY = "bot.ready",
  BOT_ERROR = "bot.error",
  BOT_QR = "bot.qr",
}
