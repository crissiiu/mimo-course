import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  important: boolean("important").notNull().default(false),
});
