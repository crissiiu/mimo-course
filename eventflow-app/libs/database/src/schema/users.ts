import { pgTable, pgEnum, varchar, timestamp, uuid } from 'drizzle-orm/pg-core';

// Enum for user table
export const roleEnum = pgEnum('role', ['USER', 'ORGANIZER', 'ADMIN']);

// User tables
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  role: roleEnum('role').default('USER').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
