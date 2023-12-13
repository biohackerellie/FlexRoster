import { AdapterUser } from 'next-auth/adapters';
import { Role } from '../db/schema';

export interface CustomUser extends AdapterUser {
  role?: Role | undefined;
}
