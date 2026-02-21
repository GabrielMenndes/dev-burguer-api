# Dev Burguer API

API para gerenciamento de pedidos, produtos, categorias e pagamentos de uma hamburgueria.

## Tecnologias
- Node.js
- Express
- Sequelize (PostgreSQL)
- Mongoose (MongoDB)
- Stripe
- Multer
- Yup

## Scripts
- `pnpm dev` — inicia o servidor em modo desenvolvimento

## Estrutura
- `src/` — código-fonte da aplicação
- `uploads/` — arquivos enviados (imagens)

## Configuração
- Configure as variáveis de ambiente em `.env` (exemplo abaixo):

```
APP_PORT=3001
STRIPE_SECRET_KEY=sua_chave_stripe
```

## Boas práticas
- Código modularizado
- Validações com Yup
- Autenticação JWT
- Padronização de rotas REST

---

> Projeto pronto para deploy e versionamento.
