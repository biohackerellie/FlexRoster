"use client";

import * as React from "react";

interface ClassroomContextType {
  teacherId: string;
  authorized: boolean;
  classroomId: string;
  available: boolean;
  roomNumber: string;
  teacherName: string;
  comment: string | null;
}

export const ClassroomContext = React.createContext<
  ClassroomContextType | undefined
>(undefined);

interface ClassroomProviderProps {
  children: React.ReactNode;
  classroom: ClassroomContextType | undefined;
}

export const ClassroomProvider = ({
  children,
  classroom,
}: ClassroomProviderProps) => {
  return (
    <ClassroomContext.Provider value={classroom}>
      {children}
    </ClassroomContext.Provider>
  );
};
