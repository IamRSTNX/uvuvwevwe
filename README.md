# belajar-vibe-coding

Backend API foundation built with Bun, Elysia.js, Drizzle ORM, and MySQL.

## Quick start

```bash
bun install
cp .env.example .env
bun run dev
```

## Available scripts

```bash
bun run dev
bun run start
bun run typecheck
bun run db:generate
bun run db:migrate
bun run db:push
bun run db:studio
```

## Endpoints

- `GET /` — API welcome message
- `GET /api/health` — server status and database connectivity check
- `GET /api/items` — list items
- `POST /api/items` — create item
- `GET /api/items/:id` — item detail
- `DELETE /api/items/:id` — delete item

## Environment

The app reads configuration from `.env` using the keys below:

```env
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=belajar_vibe_coding
```

The app is intentionally structured so that it can run as a clean foundation for a larger Elysia + Drizzle project and can be extended with new modules, routes, and database schemas.
