"use client";

import { useSearchParams } from "next/navigation";

import { signIn } from "@local/auth";

import { Button } from "@/components/ui/button";

export default function SignIn() {
  const searchParams = useSearchParams();

  const callbackUrl = Array.isArray(
    searchParams.get("callbackUrl") ? searchParams.get("callbackUrl") : "/",
  );

  return (
    <div className="container flex h-full flex-col items-center justify-center  ">
      <Button
        onClick={() => {
          signIn("azure-ad", {
            redirect: true,
            callbackUrl,
          });
        }}
      >
        Sign in
      </Button>
    </div>
  );
}
