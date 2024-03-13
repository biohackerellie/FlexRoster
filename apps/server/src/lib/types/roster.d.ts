export interface ClassResponse {
  classes: ClassInfo[];
}

export interface ClassInfo {
  sourcedId: string;
  status: string;
  dateLastModified: string;
  title: string;
  classType: string;
  classCode: string;
  location?: string;
  course: LinkObject;
  school: LinkObject;
  terms: LinkObject[];
  periods: string[];
}

export interface UserIds {
  identifier: string;
  type: string;
}

export interface Roles {
  beginDate: string;
  roleType: string;
  role: string;
  org: LinkObject;
}

export interface LinkObject {
  href: string;
  sourcedId: string;
  type: string;
}

export interface RosterResponse {
  users: ClassUser[];
}

export interface ClassUser {
  sourcedId: string;
  status: string;
  dateLastModified: string;
  metadata: { "ic.legacySourceId": string };
  userMasterIdentifier: string;
  identifier: string;
  enabledUser: "true" | "false";
  givenName: string;
  familyName: string;
  middleName: string;
  email: string;
  userIds: UserIds[];
  roles: Roles[];
  agents: [];
  grades: [string];
}

export interface AzureResponse<T> {
  "@odata.context": string;
  "@odata.nextLink"?: string; // response may be paginated
  value: T[];
}

export interface AzureUser {
  id: string;
  displayName: string;
  userPrincipalName: string;
}

export interface cachedRoster {
  attendance: "not marked" | "present" | "absent";
  rosterId: number;
  studentEmail: string;
  studentName: string;
  studentId: string | null;
  classroomId: string;
  roomNumber: string;
  teacherName: string;
  teacherId: string | null;
  available: boolean;
}
