/// <reference types="lucia" />

declare namespace Lucia {
  type Auth = import('@/lib/auth/lucia').Auth;
  type DatabaseUserAttributes = {};
  type DatabaseSessionAttributes = {};
}
