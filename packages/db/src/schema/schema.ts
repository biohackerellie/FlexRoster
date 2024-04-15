import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const role = pgEnum("Role", [
  "secretary",
  "teacher",
  "student",
  "admin",
]);

/**
 * should have gone with classStudents instead of classRosters
 * @description classRosters is a table that holds the relationship between a student and a classroom
 */
export const classRosters = pgTable("classRosters", {
  studentEmail: text("studentEmail").notNull().unique(),
  studentName: text("studentName").notNull(),
  classroomId: text("classroomId")
    .notNull()
    .references(() => classrooms.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  transferred: boolean("transferred").default(false).notNull(),
  arrived: boolean("arrived").default(false).notNull(),
  id: serial("id").primaryKey().notNull(),
});

export const rosterRelations = relations(classRosters, ({ one }) => ({
  classroom: one(classrooms, {
    fields: [classRosters.classroomId],
    references: [classrooms.id],
  }),
  users: one(users, {
    fields: [classRosters.studentEmail],
    references: [users.email],
  }),
}));

export const requests = pgTable("requests", {
  id: serial("id").primaryKey().notNull(),
  studentId: text("requester").notNull(),
  studentName: text("studentName").notNull(),
  newTeacher: text("newTeacher").notNull(),
  newTeacherName: text("newTeacherName").notNull(),
  currentTeacher: text("currentTeacher").notNull(),
  currentTeacherName: text("currentTeacherName").notNull(),
  dateRequested: text("dateRequested").notNull(),
  status: text("status")
    .$type<"pending" | "approved" | "denied">()
    .default("pending")
    .notNull(),
  arrived: boolean("arrived").default(false).notNull(),
  timestamp: text("timestamp").notNull(),
});

export const requestRelations = relations(requests, ({ one }) => ({
  users: one(users, {
    fields: [requests.studentId, requests.newTeacher, requests.currentTeacher],
    references: [users.id, users.id, users.id],
  }),
}));

export const transferLogs = pgTable("transferLogs", {
  id: serial("id").primaryKey().notNull(),
  studentEmail: text("studentEmail").notNull(),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
  roomNumber: text("roomNumber").notNull(),
  teacherName: text("teacherName").notNull(),
});

export const classrooms = pgTable("classrooms", {
  id: text("id").primaryKey().notNull(),
  roomNumber: text("roomNumber").notNull(),
  teacherName: text("teacherName").notNull(),
  teacherId: text("teacherId"),
  available: boolean("available").default(true).notNull(),
  comment: text("comment"),
});

export const classroomRelations = relations(classrooms, ({ many, one }) => ({
  classRosters: many(classRosters),
  users: one(users, {
    fields: [classrooms.teacherId],
    references: [users.id],
  }),
}));

export const users = pgTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: text("role")
    .$type<"student" | "teacher" | "admin" | "secretary">()
    .default("student")
    .notNull(),
});

export type SelectUser = typeof users.$inferSelect;

export const userRelations = relations(users, ({ one, many }) => ({
  classRosters: one(classRosters, {
    fields: [users.email],
    references: [classRosters.studentEmail],
  }),
  classrooms: one(classrooms),
  logs: many(logs),
}));

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: varchar("type", { length: 255 })
      .$type<"oauth" | "oidc" | "email">()
      .notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

export const logs = pgTable("logs", {
  id: text("id").primaryKey().notNull(),
  user: text("user").references(() => users.id, {
    onDelete: "no action",
    onUpdate: "no action",
  }),
  type: text("type")
    .$type<"error" | "request" | "attendance" | "message">()
    .notNull()
    .default("error"),

  action: text("action").notNull(),
});

export const logRelations = relations(logs, ({ one }) => ({
  users: one(users, {
    fields: [logs.user],
    references: [users.id],
  }),
}));
