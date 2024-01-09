import { AdapterUser } from 'next-auth/adapters';



export type Role = 'admin' | 'teacher' | 'student' | 'secretary';

export interface CustomUser extends AdapterUser {
  role: Role | undefined;
  name: string | null | undefined;
  email: string | null | undefined;
  image?: string | null | undefined;
  id: unknown;
}

export class Session {
  constructor(user: CustomUser) {
    this.user = user;
  }
  user: {
    name: string;
    email: string;
    image: string;
    role: Role | 'Student';
    id: string;
  };
  getRole() {
    return this.user.role;
  }
}
