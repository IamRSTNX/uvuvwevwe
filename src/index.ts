import { Elysia } from "elysia";
import { env } from "./config/env";
import { healthRoutes } from "./routes/health";
import { itemRoutes } from "./routes/items";

const app = new Elysia()
  .get("/", () => ({
    name: "Belajar Vibe Coding API",
    status: "ready",
    message: "Backend Bun + Elysia.js + Drizzle is running.",
    health: "/api/health",
  }))
  .use(healthRoutes)
  .use(itemRoutes)
  .listen(env.port);

console.log(`Server running at http://localhost:${env.port}`);
console.log(`Health check: http://localhost:${env.port}/api/health`);

export default app;
