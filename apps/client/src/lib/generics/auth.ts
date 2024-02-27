"use server";

import { cookies } from "next/headers";

import { auth } from "@local/auth";

export async function isAuthenticated() {
  const session = await auth();
	const 
  if (session) {
  return {
		
	}
  } else {
    cookies().set("isAuthenticated", "false");
  }
}

class SessionUser {
  id: string;
  name: string;
  roles: "student" | "teacher" | "admin" | "secretary";
  email: string;

  constructor(
    id: string,
    name: string,
    roles: "student" | "teacher" | "admin" | "secretary",
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.roles = roles;
    this.email = email;
  }
}
