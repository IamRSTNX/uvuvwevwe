import { Elysia } from "elysia";
import { pingDatabase } from "../db";

export const healthRoutes = new Elysia({ prefix: "/api" }).get("/health", async () => {
  const result = await pingDatabase();

  if (!result.connected) {
    return {
      status: "degraded",
      success: false,
      message: "Database connection unavailable.",
      database: {
        connected: false,
        error: result.error,
      },
    };
  }

  return {
    status: "ok",
    success: true,
    message: "Backend and database are running.",
    database: {
      connected: true,
    },
  };
});
