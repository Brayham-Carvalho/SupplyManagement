
# Sistema SupplyManagement

Este projeto é um sistema de gestão de suprimentos que permite o cadastro e gerenciamento de fabricantes, distribuidoras, varejistas e produtos.

<div align="center">
  <img src="https://github.com/user-attachments/assets/d0bc8524-a10a-4304-86f6-163a85660d21" width="800px" />
</div>

## Funcionalidades

- **Cadastro de Produtos:** Permite adicionar, editar, remover e controlar o fluxo de tranferência de produtos do sistema de um armazém para outro.
- **Cadastro de Varejistas:** Permite adicionar, editar e remover varejistas.
- **Cadastro de Distribuidoras:** Permite adicionar, editar e remover distribuidoras.
- **Cadastro de Fabricantes:** Permite adicionar, editar e remover fabricantes.

## Visão Geral

Bem-vindo ao Projeto Full-Stack Boilerplate! Este projeto é um modelo abrangente projetado para iniciar seu desenvolvimento com uma pilha de tecnologia poderosa e versátil. Ele combina o melhor de Next.js, NestJS, Prisma e várias bibliotecas de UI e formulários, fornecendo uma base sólida para a construção de aplicações web modernas e robustas.
<div align="center">
   <img src="https://github.com/user-attachments/assets/44ff4ec3-6dfd-4159-bbdc-c12bf2327374" width="800px" />
  
</div>



## Principais Recursos

- **Next.js**: Uma versão avançada 14 utilizando os recursos mais recentes do React 18.
- **NextAuth**: O sistema de autenticação para aplicações Next.js
- **Alternância de Modo Escuro:**: Suporte embutido para temas claros e escuros, aprimorando a interface do usuário.
- **NestJS**: Um framework Node.js progressivo para aplicações do lado do servidor escaláveis.
- **Suporte a GraphQL e REST API**: Flexibilidade para usar GraphQL ou REST APIs ou ambos conforme as necessidades do seu projeto.
- **Prisma**: ORM moderno para Node.js e TypeScript.
- **Bibliotecas de UI**: Integração do Shadcn UI e Tailwind CSS para criar interfaces de usuário bonitas e responsivas.
- **Manipulação de Formulários**: Utiliza Zod para validação de esquema e React Hook Form para gestão eficiente de formulários.
- **GraphQL Codegen**: Simplifica seu fluxo de trabalho gerando automaticamente código a partir do seu esquema GraphQL.

## Getting Started

### Pré Requisitos

- Node.js
- npm or yarn
- Docker

### Instalação

1. **Clonar Repositório**

   ```bash
   git clone https://github.com/Brayham-Carvalho/SistemaDeEstoqueWeb.git
   ```

2. **Instalação de dependencies**

   ```bash
   pnpm install
   ```

3. **Setup .env variables**

   ```bash
   # Rename all .env.example to .env and populate the values.
   ```

4. **Build aplicações e bibliotecas**

   ```bash
   pnpm build

   pnpm nx connect
   ```

5. **Run development servers**

   ```
   cd apps/api
   docker compose up -d
   pnpm prisma migrate dev
   pnpm dev

   cd apps/web
   pnpm dev
   ```
