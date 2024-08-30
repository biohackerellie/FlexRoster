import { signIn } from "@local/auth";
import { Button } from "@local/ui/button";

import { env } from "@/env";

const LoginButton = () => {
  return (
    <div className="flex py-2">
      <form
        action={async () => {
          "use server";
          if (env.NEXT_PUBLIC_DEMO) {
            await signIn("google");
          } else {
            await signIn("azure-ad", {
              redirect: true,
              redirectTo: "/dashboard",
            });
          }
        }}
      >
        <Button type="submit" variant="outline" className="w-full">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginButton;
