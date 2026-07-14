/**
 * Dados do usuário no banco
 */
export interface IUser {
  id: string;
  jid: string; // ID do WhatsApp
  name: string;
  balance: number; // Saldo em moeda
  level: number;
  experience: number;
  inventory: IInventoryItem[];
  status: UserStatus;
  isBanned: boolean;
  banReason?: string;
  isVip: boolean;
  vipExpire?: number;
  warnings: number;
  lastDaily?: number;
  lastWeekly?: number;
  createdAt: number;
  updatedAt: number;
}

export interface IInventoryItem {
  id: string;
  name: string;
  quantity: number;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BANNED = "banned",
}
