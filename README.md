<!-- markdownlint-disable MD033 MD041 -->
<div align="center">
  <h1>☁️ Nuvem Bot - One Piece</h1>
  <p>
    <strong>Bot WhatsApp Multi Device com RPG One Piece, Sistema de Economia, VIP, Missões e muito mais</strong>
  </p>

  ![License](https://img.shields.io/badge/license-MIT-green)
  ![Node Version](https://img.shields.io/badge/node->=18.0.0-blue)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)

</div>

---

## 📋 Recursos Principais

- ✅ **Multi Device** - Funciona em qualquer dispositivo com Baileys MD
- ✅ **Sistema RPG** - RPG completo com personagens de One Piece
- ✅ **Economia** - Sistema de moeda, banco, investimentos
- ✅ **VIP Premium** - Sistema de benefícios exclusivos
- ✅ **Missões** - Sistema de missões diárias, semanais e especiais
- ✅ **Loja** - Compra e venda de itens
- ✅ **Ranking** - Leaderboard de usuários
- ✅ **Administração** - Controle total de grupos
- ✅ **Anti Spam/Flood/Link/Trava** - Proteção automática
- ✅ **Dashboard Web** - Interface para gerenciamento
- ✅ **API REST** - Integração com outros serviços
- ✅ **Sistema de Backup** - Backup automático de dados
- ✅ **Suporte PostgreSQL e SQLite** - Escolha seu banco
- ✅ **Documentação Completa** - Guias de instalação e uso

---

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** ou **yarn**
- **Git**

### Instalação

#### 1️⃣ Clone o repositório

```bash
git clone https://github.com/srsuya/NUVEM-ONE-PIECEBOT.git
cd NUVEM-ONE-PIECEBOT
```

#### 2️⃣ Instale as dependências

```bash
npm install
```

#### 3️⃣ Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações.

#### 4️⃣ Inicialize o banco de dados

```bash
npm run db:init
```

#### 5️⃣ Compile o TypeScript

```bash
npm run build
```

#### 6️⃣ Inicie o bot

```bash
npm start
```

---

## 📱 Uso no Termux

### Instalação no Termux

```bash
# Atualize o Termux
pkg update && pkg upgrade

# Instale as dependências
pkg install nodejs git

# Clone o repositório
git clone https://github.com/srsuya/NUVEM-ONE-PIECEBOT.git
cd NUVEM-ONE-PIECEBOT

# Instale as dependências do projeto
npm install

# Configure o ambiente
cp .env.example .env
nano .env  # Edite conforme necessário

# Inicie o bot
npm run dev
```

### Manter o Bot Rodando

#### Opção 1: Usar `screen`

```bash
screen -S nuvem npm start
# Pressione Ctrl+A seguido de D para destacar
# Para retomar: screen -r nuvem
```

#### Opção 2: Usar PM2

```bash
npm install -g pm2
pm2 start dist/index.js --name "nuvem-bot"
pm2 save
pm2 startup
```

---

## 📁 Estrutura do Projeto

```
NUVEM-ONE-PIECEBOT/
├── src/
│   ├── index.ts                 # Entrada principal
│   ├── config/                  # Configurações
│   ├── commands/                # Comandos do bot
│   ├── events/                  # Eventos do WhatsApp
│   ├── services/                # Lógica de negócio
│   ├── database/                # Banco de dados
│   ├── models/                  # Modelos de dados
│   ├── middlewares/             # Middlewares
│   ├── utils/                   # Funções utilitárias
│   ├── types/                   # Tipos TypeScript
│   └── routes/                  # Rotas API
├── storage/
│   ├── sessions/                # Sessões Baileys
│   ├── auth/                    # Autenticação
│   ├── database.db              # Banco SQLite
│   └── backups/                 # Backups
├── logs/                        # Arquivos de log
├── temp/                        # Arquivos temporários
├── scripts/                     # Scripts de utilidade
├── .env.example                 # Variáveis de ambiente
├── tsconfig.json                # Configuração TypeScript
├── package.json                 # Dependências
└── README.md                    # Este arquivo
```

---

## 💻 Comandos Disponíveis

### Desenvolvimento

```bash
npm run dev          # Inicia em modo desenvolvimento (watch)
npm run build        # Compila TypeScript
npm run start        # Inicia em produção
npm run lint         # Verifica linting
npm run lint:fix     # Corrige linting automaticamente
npm run format       # Formata código com Prettier
npm run clean        # Limpa diretórios de build
```

### Setup e Manutenção

```bash
npm run setup        # Setup inicial (cria diretórios, banco, etc)
npm run update       # Atualiza dependências e configurações
npm run db:init      # Inicializa o banco de dados
```

---

## 🔧 Configuração

### Variáveis de Ambiente (.env)

```env
# Bot
BOT_NAME=Nuvem Bot
NODE_ENV=development

# Database
DATABASE_TYPE=sqlite
DATABASE_PATH=./storage/database.db

# API
API_PORT=3000
ENABLE_API=true

# Features
PREFIX=!
ENABLE_ANTIBOT=true
ENABLE_ANTISPAM=true
```

Para mais detalhes, veja `.env.example`.

---

## 📚 Documentação

### Estrutura de Comandos

Cada comando é uma classe que implementa a interface `ICommand`:

```typescript
interface ICommand {
  name: string;
  description: string;
  category: "rpg" | "economy" | "admin" | "general";
  execute(message: Message, args: string[]): Promise<void>;
}
```

### Criando um Novo Comando

```typescript
import { ICommand } from "@types/command";
import { Message } from "@types/message";

export class MyCommand implements ICommand {
  name = "mycommand";
  description = "Descrição do comando";
  category = "general";

  async execute(message: Message, args: string[]): Promise<void> {
    // Implementação
  }
}
```

### Estrutura de Eventos

Eventos são escutadores de ações do WhatsApp:

```typescript
export class MessageEvent {
  async handle(message: Message): Promise<void> {
    // Lógica do evento
  }
}
```

---

## 🗄️ Banco de Dados

### SQLite (Padrão)

Configuração automática, ideal para desenvolvimento e pequenos servidores.

### PostgreSQL

Para ambientes de produção com alto tráfego:

```env
DATABASE_TYPE=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DATABASE=nuvem_bot
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
```

---

## 🐳 Docker

### Build

```bash
docker-compose up -d
```

### Logs

```bash
docker-compose logs -f bot
```

### Parar

```bash
docker-compose down
```

---

## 🚨 Troubleshooting

### Erro: "Cannot find module"

```bash
npm install
npm run build
```

### Erro: "Port already in use"

```bash
# Mude a porta em .env
API_PORT=3001
```

### Erro no Termux

```bash
# Instale dependências de build
pkg install build-essential python3
npm install --build-from-source
```

---

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Para grandes mudanças, abra uma issue primeiro para discutir as alterações propostas.

---

## 📞 Suporte

Para problemas, dúvidas ou sugestões, abra uma [issue](https://github.com/srsuya/NUVEM-ONE-PIECEBOT/issues).

---

## 👨‍💻 Autor

**Desenvolvido por:** [srsuya](https://github.com/srsuya)

---

<div align="center">
  <p>Made with ❤️ for One Piece fans</p>
</div>
