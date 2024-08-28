
CREATE TYPE "RequestStatus" AS ENUM('pending', 'approved', 'denied', 'arrived');
CREATE TYPE "Role" AS ENUM('secretary', 'teacher', 'student', 'admin');
CREATE TYPE "Status" AS ENUM('transferredA', 'transferredN', 'default');
CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
CREATE TABLE IF NOT EXISTS "availability" (
	"id" text PRIMARY KEY NOT NULL,
	"classroomId" text NOT NULL,
	"date" date NOT NULL,
	"available" boolean DEFAULT false NOT NULL,
	"teacherId" text
);

CREATE TABLE IF NOT EXISTS "classrooms" (
	"id" text PRIMARY KEY NOT NULL,
	"roomNumber" text NOT NULL,
	"teacherName" text NOT NULL,
	"teacherId" text,
	"comment" text,
	"isFlex" boolean DEFAULT false
);



CREATE VIEW availability_view AS
SELECT
  c."id",
  c."roomNumber",
  c."teacherName",
  c."teacherId",
  c."comment",
  c."isFlex",
  JSON_AGG(a.*) AS "availability"
FROM "classrooms" c
JOIN "availability" a ON c."id" = a."classroomId"
GROUP BY c."id", a."id";

CREATE TABLE IF NOT EXISTS "config" (
	"secretaries" text[],
	"preferredNames" json,
	"excludedTeachers" text[],
	"semesterClassName" text,
	"isRedisCluster" boolean DEFAULT true,
	"createdAt" timestamp PRIMARY KEY DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "logs" (
	"id" text PRIMARY KEY NOT NULL,
	"user" text,
	"type" text DEFAULT 'error' NOT NULL,
	"action" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"studentId" text NOT NULL,
	"studentName" text NOT NULL,
	"newTeacher" text NOT NULL,
	"newTeacherName" text NOT NULL,
	"currentTeacher" text NOT NULL,
	"currentTeacherName" text NOT NULL,
	"dateRequested" date NOT NULL,
	"status" "RequestStatus" DEFAULT 'pending' NOT NULL,
	"arrived" boolean DEFAULT false,
	"timestamp" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS "students" (
	"studentEmail" text NOT NULL,
	"studentName" text NOT NULL,
	"classroomId" text NOT NULL,
	"status" "Status" DEFAULT 'default' NOT NULL,
  "defaultClassroomId" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	CONSTRAINT "students_studentEmail_unique" UNIQUE("studentEmail")
);

CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text,
	"role" text DEFAULT 'student' NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);

CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);


ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "availability" ADD CONSTRAINT "availability_classroomId_classrooms_id_fk" FOREIGN KEY ("classroomId") REFERENCES "classrooms"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "availability" ADD CONSTRAINT "availability_teacherId_user_id_fk" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
ALTER TABLE "classrooms" ADD CONSTRAINT "classrooms_teacherId_user_id_fk" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
ALTER TABLE "logs" ADD CONSTRAINT "logs_user_user_id_fk" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
ALTER TABLE "requests" ADD CONSTRAINT "requests_studentId_user_id_fk" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
ALTER TABLE "requests" ADD CONSTRAINT "requests_newTeacher_user_id_fk" FOREIGN KEY ("newTeacher") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
ALTER TABLE "requests" ADD CONSTRAINT "requests_currentTeacher_user_id_fk" FOREIGN KEY ("currentTeacher") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "students" ADD CONSTRAINT "students_classroomId_classrooms_id_fk" FOREIGN KEY ("classroomId") REFERENCES "classrooms"("id") ON DELETE cascade ON UPDATE cascade;
CREATE UNIQUE INDEX IF NOT EXISTS "email_idx" ON "students" USING btree ("studentEmail");
