import { signIn } from "@local/auth";

import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="container flex flex-col">
      <form>
        <Button
          formAction={async () => {
            "use server";
            await signIn("azure-ad");
          }}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
