import { signIn } from "@local/auth";

import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="container flex flex-col">
      <form>
        <Button
          formAction={async () => {
            "use server";
            await signIn("azure-ad", {
              callbackUrl:
                "https://flex.laurel.k12.mt.us/api/auth/callback/azure-ad",
            });
          }}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
