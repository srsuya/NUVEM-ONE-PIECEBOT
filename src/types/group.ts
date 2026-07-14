/**
 * Dados do grupo no banco
 */
export interface IGroup {
  id: string;
  jid: string; // ID do grupo
  name: string;
  description?: string;
  owner: string; // JID do dono
  admins: string[]; // JIDs dos admins
  members: string[];
  settings: IGroupSettings;
  moderation: IGroupModeration;
  createdAt: number;
  updatedAt: number;
}

export interface IGroupSettings {
  antiSpam: boolean;
  antiFlood: boolean;
  antiLink: boolean;
  antiTrava: boolean;
  antiBot: boolean;
  welcome: boolean;
  prefix?: string;
  language?: string;
}

export interface IGroupModeration {
  warnings: Map<string, number>; // JID -> contador de warnings
  muted: string[]; // JIDs dos usuários mutados
  restrictedWords: string[];
}
