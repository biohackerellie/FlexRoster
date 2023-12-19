import {
  timestamp,
  pgTable,
  pgTableCreator,
  serial,
  text,
  primaryKey,
  integer,
  AnyPgColumn,
  pgEnum,
  json,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';
import type { AdapterAccount } from '@auth/core/adapters';
import { relations } from 'drizzle-orm';

/**
 * Users Section
 */

export const rolesEnum = pgEnum('role', [
  'admin',
  'student',
  'teacher',
  'secretary',
]);
export type Role = (typeof rolesEnum.enumValues)[number];

export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  image: text('image'),
  role: rolesEnum('role').default('student').notNull(),
  classroomID: integer('classroomID'),
  rosterID: integer('roster_id'),
});

export type User = typeof users.$inferSelect;

export const userRelations = relations(users, ({ one, many }) => ({
  classrooms: one(classrooms, {
    fields: [users.classroomID],
    references: [classrooms.id],
  }),
  roster: one(classRosters, {
    fields: [users.rosterID],
    references: [classRosters.id],
  }),
}));

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

/**
 * Classes
 */

export const classRosters = pgTable('classRoster', {
  id: serial('id').primaryKey(),
  studentId: text('studentId'),
  classroomId: integer('classroomId'),
});

export const ClassRosterRelations = relations(
  classRosters,
  ({ one, many }) => ({
    users: many(users),
    classrooms: one(classrooms, {
      fields: [classRosters.classroomId],
      references: [classrooms.id],
    }),
  })
);

export const classrooms = pgTable('classroom', {
  id: serial('id').primaryKey(),
  roomNumber: text('roomNumber').notNull(),
  teacherName: text('teacherName').notNull(),
  studentCount: integer('studentCount').notNull().default(0),
  rosterID: serial('rosterID').references(() => classRosters.id),
});

export const ClassRoomRelations = relations(classrooms, ({ one, many }) => ({
  users: many(users),
  classRosters: one(classRosters, {
    fields: [classrooms.rosterID],
    references: [classRosters.id],
  }),
}));

export type Classroom = typeof classrooms.$inferSelect;
export type CreateClassroom = typeof classrooms.$inferInsert;

type requestStatus = 'pending' | 'granted' | 'denied';

export const transferRequests = pgTable('transferRequest', {
  id: serial('id').primaryKey(),
  studentId: text('studentId').references(() => users.id),
  classroomId: integer('classroomId').references(() => classrooms.id),
  status: text('status').$type<requestStatus>().notNull().default('pending'),
  createdAt: timestamp('createdAt', { mode: 'date' }).notNull(),
});

export type TransferRequest = typeof transferRequests.$inferSelect;
export type CreateTransferRequest = typeof transferRequests.$inferInsert;

export const messages = pgTable('message', {
  id: serial('id').primaryKey(),
  senderId: text('senderId').references(() => users.id),
  receiverId: text('receiverId').references(() => users.id),
  message: text('message').notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).notNull(),
});

/**
 * Logs
 */

type EventTypes =
  | 'message'
  | 'request sent'
  | 'request granted'
  | 'request denied'
  | 'checked in'
  | 'checked out';

export const eventLogs = pgTable('eventLog', {
  id: serial('id').primaryKey(),
  classroom_id: integer('classroom_id').references(() => classrooms.id),
  student_id: text('student_id').references(() => users.id),
  eventType: text('eventType').$type<EventTypes>().notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).notNull(),
});

export type EventLog = typeof eventLogs.$inferSelect;

export const dailyLogs = pgTable('dailyLog', {
  id: serial('id').primaryKey(),
  classroom_id: integer('classroom_id').references(() => classrooms.id),
  totalStudents: integer('totalStudents').notNull(),
  studentNames: json('studentNames').$type<[{ name: User['name'] }]>(),
  createdAt: timestamp('createdAt', { mode: 'date' }).notNull(),
});

export type DailyLog = typeof dailyLogs.$inferSelect;
export type CreateLog = typeof dailyLogs.$inferInsert;
