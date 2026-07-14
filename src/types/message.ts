/**
 * Tipo de mensagem do WhatsApp
 */
export interface IMessage {
  id: string;
  from: string;
  to: string;
  body: string;
  timestamp: number;
  isGroup: boolean;
  groupId?: string;
  sender: ISender;
  quoted?: IMessage;
  mentions: string[];
  media?: IMedia;
  type: MessageType;
}

export interface ISender {
  id: string;
  name: string;
  isBot: boolean;
}

export interface IMedia {
  url: string;
  type: "image" | "video" | "audio" | "document";
  caption?: string;
}

export enum MessageType {
  TEXT = "text",
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
  DOCUMENT = "document",
  STICKER = "sticker",
  LOCATION = "location",
  CONTACT = "contact",
}
