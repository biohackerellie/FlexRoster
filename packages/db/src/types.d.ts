import { classrooms, classRosters, users } from "./schema/schema";

export type SelectUser = typeof users.$inferSelect;

export type SelectClassroom = typeof classrooms.$inferSelect;
export type SelectClassRoster = typeof classRosters.$inferSelect;

export interface ClassRoomWithUsers extends SelectClassroom {
  users: SelectUser[];
}
