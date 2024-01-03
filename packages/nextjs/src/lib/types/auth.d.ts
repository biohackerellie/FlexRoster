import { AdapterUser } from 'next-auth/adapters';
import { Role } from '../../../../Database/schema';

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
