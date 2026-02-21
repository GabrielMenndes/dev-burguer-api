
# Dev Burguer API

API robusta para gestão de pedidos, produtos, categorias, usuários e pagamentos de uma hamburgueria, integrando múltiplas tecnologias modernas para garantir escalabilidade, segurança e flexibilidade.

---

## Visão Geral

A Dev Burguer API foi desenvolvida para atender operações de um sistema de pedidos de hamburgueria, contemplando:

- Cadastro e autenticação de usuários (com controle de administrador)
- Gerenciamento de produtos e categorias (CRUD completo)
- Upload e gestão de imagens de produtos e categorias
- Criação e atualização de pedidos, com histórico e status
- Integração com Stripe para pagamentos online
- Middleware de autenticação e autorização JWT
- Validações robustas com Yup
- Suporte a banco relacional (PostgreSQL via Sequelize) e NoSQL (MongoDB via Mongoose)
- Arquitetura modular e escalável

---

## Funcionalidades

### Usuários
- Cadastro de novos usuários (com senha criptografada)
- Login e geração de token JWT
- Controle de privilégios (admin)

### Produtos
- Cadastro, listagem, atualização de produtos
- Associação de produtos a categorias
- Upload de imagem para cada produto
- Suporte a ofertas/promos

### Categorias
- Cadastro, listagem, atualização de categorias
- Upload de imagem para cada categoria

### Pedidos
- Criação de pedidos com múltiplos produtos
- Atualização de status do pedido (ex: realizado, em preparo, entregue)
- Histórico de pedidos por usuário

### Pagamentos
- Integração com Stripe para geração de Payment Intent
- Cálculo automático do valor total do pedido

### Segurança e Validação
- Autenticação JWT obrigatória para rotas protegidas
- Middleware para rotas de administrador
- Validação de dados de entrada com Yup
- Hash de senha com bcrypt

### Uploads
- Upload de arquivos com Multer
- Servidor de arquivos estático para imagens

---

## Arquitetura e Ferramentas

- **Node.js**: Plataforma principal de execução
- **Express**: Framework web para rotas e middlewares
- **Sequelize**: ORM para PostgreSQL (produtos, categorias, usuários)
- **Mongoose**: ODM para MongoDB (pedidos)
- **Stripe**: API de pagamentos
- **Multer**: Upload de arquivos
- **Yup**: Validação de dados
- **JWT**: Autenticação e autorização
- **bcrypt**: Hash de senhas
- **dotenv**: Gerenciamento de variáveis de ambiente
- **uuid**: Geração de IDs únicos
- **Biome**: Linter e formatter para padronização de código

---

## Estrutura de Pastas

- `src/`
	- `app/`
		- `controllers/` — Lógica de negócio (User, Product, Category, Order, Session, Stripe)
		- `middlewares/` — Autenticação e autorização
		- `models/` — Modelos Sequelize (User, Product, Category)
		- `schemas/` — Schemas Mongoose (Order)
	- `Config/` — Configurações de banco, autenticação, upload
	- `database/` — Inicialização e migrações do banco relacional
	- `routes.js` — Definição das rotas da API
	- `app.js` — Instanciação do app Express
	- `server.js` — Inicialização do servidor
- `uploads/` — Imagens de produtos e categorias

---

## Rotas Principais

- `POST /users` — Cadastro de usuário
- `POST /sessions` — Login
- `POST /products` — Cadastro de produto (admin)
- `PUT /products/:id` — Atualização de produto (admin)
- `GET /products` — Listagem de produtos
- `POST /categories` — Cadastro de categoria (admin)
- `PUT /categories/:id` — Atualização de categoria (admin)
- `GET /categories` — Listagem de categorias
- `POST /orders` — Criação de pedido
- `GET /orders` — Listagem de pedidos
- `PUT /orders/:id` — Atualização de status do pedido (admin)
- `POST /create-payment-intent` — Geração de intent de pagamento Stripe

---

## Diferenciais Técnicos

- Uso simultâneo de bancos SQL e NoSQL para diferentes domínios de dados
- Separação clara de responsabilidades (controllers, models, middlewares)
- Padronização de mensagens de erro e sucesso
- Pronto para deploy em ambientes cloud ou on-premise
- Código limpo, modular e documentado

---
