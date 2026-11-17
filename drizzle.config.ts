import type { Config } from "drizzle-kit";
import { env } from "./src/config/env";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    host: env.dbHost,
    port: env.dbPort,
    user: env.dbUser,
    password: env.dbPassword,
    database: env.dbName,
  },
  verbose: true,
  strict: true,
} satisfies Config;
