"use client";

import { useRouter } from "next/navigation";

export default function OpenModel(): (open: boolean) => void {
  const router = useRouter();
  return (open: boolean) => {
    if (!open) {
      router.back();
    }
  };
}
