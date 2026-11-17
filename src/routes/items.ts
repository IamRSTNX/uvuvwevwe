import { eq } from "drizzle-orm";
import { Elysia, t } from "elysia";
import { db } from "../db";
import { items } from "../db/schema";

export const itemRoutes = new Elysia({ prefix: "/api" })
  .get("/items", async () => {
    try {
      const records = await db.select().from(items);

      return {
        success: true,
        data: records,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Database unavailable.",
      };
    }
  })
  .get("/items/:id", async ({ params }) => {
    try {
      const record = await db.select().from(items).where(eq(items.id, Number(params.id)));

      if (!record[0]) {
        return {
          success: false,
          message: "Item not found.",
        };
      }

      return {
        success: true,
        data: record[0],
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Database unavailable.",
      };
    }
  })
  .post(
    "/items",
    async ({ body }) => {
      try {
        const result = (await db.insert(items).values({
          name: body.name,
          description: body.description ?? null,
          updatedAt: new Date(),
        })) as { insertId?: number };

        const itemId = Number(result.insertId ?? 0);
        const [record] = await db.select().from(items).where(eq(items.id, itemId));

        return {
          success: true,
          data: record ?? null,
        };
      } catch (error) {
        return {
          success: false,
          message: error instanceof Error ? error.message : "Database unavailable.",
        };
      }
    },
    {
      body: t.Object({
        name: t.String({ minLength: 1 }),
        description: t.Optional(t.String()),
      }),
    },
  )
  .delete("/items/:id", async ({ params }) => {
    try {
      const result = (await db.delete(items).where(eq(items.id, Number(params.id)))) as {
        rowsAffected?: number;
      };

      return {
        success: true,
        deleted: Number(result.rowsAffected ?? 0),
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Database unavailable.",
      };
    }
  });
