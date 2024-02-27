"use client";

import { useRouter } from "next/navigation";

export default function Redirect(path: string) {
  const router = useRouter();
  router.push(path);
}
