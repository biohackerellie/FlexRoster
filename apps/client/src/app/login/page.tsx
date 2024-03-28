import { cookies } from "next/headers";

import { signIn } from "@local/auth";

import { Button } from "@/components/ui/button";
import { env } from "@/env";

export default function SignIn() {
  return (
    <div className="container flex flex-col">
      <form>
        <Button
          formAction={async () => {
            "use server";
            if (env.NODE_ENV === "production") {
              cookies().set(
                "authjs.callback-url",
                "https://flex.laurel.k12.mt.us/api/auth/callback/azure-ad",
              );
            }
            await signIn("azure-ad");
          }}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
