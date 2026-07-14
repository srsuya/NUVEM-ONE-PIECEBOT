/**
 * Erros customizados da aplicação
 */

export class BotError extends Error {
  constructor(message: string, public code: string = "BOT_ERROR") {
    super(message);
    this.name = "BotError";
  }
}

export class CommandError extends BotError {
  constructor(message: string) {
    super(message, "COMMAND_ERROR");
    this.name = "CommandError";
  }
}

export class PermissionError extends BotError {
  constructor(message: string = "Você não tem permissão para fazer isso") {
    super(message, "PERMISSION_ERROR");
    this.name = "PermissionError";
  }
}

export class DatabaseError extends BotError {
  constructor(message: string) {
    super(message, "DATABASE_ERROR");
    this.name = "DatabaseError";
  }
}

export class ValidationError extends BotError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}
