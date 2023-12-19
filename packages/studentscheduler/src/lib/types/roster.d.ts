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

export interface LinkObject {
  href: string;
  sourcedId: string;
  type: string;
}
