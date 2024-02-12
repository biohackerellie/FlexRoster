import { pgTable, foreignKey, pgEnum, text, serial, timestamp, varchar, integer, boolean } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const role = pgEnum("Role", ['secretary', 'teacher', 'student', 'admin'])


export const classRosters = pgTable("classRosters", {
	studentEmail: text("studentEmail").notNull(),
	classroomId: text("classroomId").notNull().references(() => classrooms.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	id: serial("id").primaryKey().notNull(),
});

export const transferLogs = pgTable("transferLogs", {
	id: serial("id").primaryKey().notNull(),
	studentEmail: text("studentEmail").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	roomNumber: text("roomNumber").notNull(),
	teacherName: text("teacherName").notNull(),
});

export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar("id", { length: 36 }).primaryKey().notNull(),
	checksum: varchar("checksum", { length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text("logs"),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const classrooms = pgTable("classrooms", {
	id: text("id").primaryKey().notNull(),
	roomNumber: text("roomNumber").notNull(),
	teacherName: text("teacherName").notNull(),
	available: boolean("available").default(true).notNull(),
});

