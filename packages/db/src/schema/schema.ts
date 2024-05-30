import { is, relations } from "drizzle-orm";
import {
  boolean,
  date,
  index,
  integer,
  json,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const role = pgEnum("Role", [
  "secretary",
  "teacher",
  "student",
  "admin",
]);
export const status = pgEnum("Status", [
  "transferredA",
  "transferredN",
  "default",
]);

export const requestStatus = pgEnum("RequestStatus", [
  "pending",
  "approved",
  "denied",
  "arrived",
]);

/**
 * @description students is a table that holds the relationship between an InfiniteCampus student and classrooms, and AD users
 */
export const students = pgTable(
  "students",
  {
    studentEmail: text("studentEmail").notNull().unique(),
    studentName: text("studentName").notNull(),
    classroomId: text("classroomId")
      .notNull()
      .references(() => classrooms.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    status: status("status").default("default").notNull(),
    id: serial("id").primaryKey().notNull(),
  },
  (students) => {
    return {
      emailIdx: uniqueIndex("email_idx").on(students.studentEmail),
    };
  },
);

export const studentRelations = relations(students, ({ one }) => ({
  classroom: one(classrooms, {
    fields: [students.classroomId],
    references: [classrooms.id],
  }),
  users: one(users, {
    fields: [students.studentEmail],
    references: [users.email],
  }),
}));

export const requests = pgTable("requests", {
  id: serial("id").primaryKey().notNull(),
  studentId: text("studentId")
    .notNull()
    .references(() => users.id),
  studentName: text("studentName").notNull(),
  newTeacher: text("newTeacher")
    .notNull()
    .references(() => users.id),
  newTeacherName: text("newTeacherName").notNull(),
  currentTeacher: text("currentTeacher")
    .notNull()
    .references(() => users.id),
  currentTeacherName: text("currentTeacherName").notNull(),
  dateRequested: date("dateRequested", { mode: "date" }).notNull(),
  status: requestStatus("status").default("pending").notNull(),
  arrived: boolean("arrived").default(false),
  timestamp: text("timestamp").notNull(),
});

export const requestRelations = relations(requests, ({ one }) => ({
  student: one(users, {
    fields: [requests.studentId],
    references: [users.id],
    relationName: "student",
  }),
  newTeacher: one(users, {
    fields: [requests.newTeacher],
    references: [users.id],
    relationName: "newTeacher",
  }),
  currentTeacher: one(users, {
    fields: [requests.currentTeacher],
    references: [users.id],
    relationName: "currentTeacher",
  }),
}));

export const classrooms = pgTable("classrooms", {
  id: text("id").primaryKey().notNull(),
  roomNumber: text("roomNumber").notNull(),
  teacherName: text("teacherName").notNull(),
  teacherId: text("teacherId").references(() => users.id),
  comment: text("comment"),
});

export const classroomRelations = relations(classrooms, ({ many, one }) => ({
  students: many(students),
  users: one(users, {
    fields: [classrooms.teacherId],
    references: [users.id],
  }),
  availability: many(availability),
}));

export const availability = pgTable("availability", {
  id: serial("id").primaryKey().notNull(),
  classroomId: text("classroomId")
    .notNull()
    .references(() => classrooms.id, { onDelete: "cascade" }),
  date: date("date", { mode: "date" }).notNull(),
  available: boolean("available").default(false).notNull(),
  teacherId: text("teacherId").references(() => users.id),
});

export const availabilityRelations = relations(availability, ({ one }) => ({
  classroom: one(classrooms, {
    fields: [availability.classroomId],
    references: [classrooms.id],
  }),
  users: one(users, {
    fields: [availability.teacherId],
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

export const userRelations = relations(users, ({ one, many }) => ({
  students: one(students, {
    fields: [users.email],
    references: [students.studentEmail],
  }),
  classrooms: one(classrooms),
  logs: many(logs),
  studentRequests: many(requests, { relationName: "student" }),
  newTeacherRequests: many(requests, { relationName: "newTeacher" }),
  currentTeacherRequests: many(requests, { relationName: "currentTeacher" }),
  availability: many(availability),
}));
export type SelectUser = typeof users.$inferSelect;
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

interface PreferredNames {
  givenName: string;
  preferredName: string;
}
export const config = pgTable("config", {
  secretaries: text("secretaries").array(),
  preferredNames:
    json("preferredNames").$type<
      { givenName: string; preferredName: string }[]
    >(),
  excludedTeachers: text("excludedTeachers").array(),
  semesterClassName: text("semesterClassName"),
  isRedisCluster: boolean("isRedisCluster").default(true),
  createdAt: timestamp("createdAt").defaultNow().primaryKey(),
});
