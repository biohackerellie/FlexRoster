CREATE TABLE IF NOT EXISTS "config" (
	"secretaries" text[],
	"preferredNames" json,
	"excludedTeachers" text[],
	"semesterClassName" text,
	"isRedisCluster" boolean DEFAULT true,
	"createdAt" timestamp DEFAULT now()
);
