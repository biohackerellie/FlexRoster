import { signIn } from "next-auth/react";

import { Button } from "@local/ui/button";

const LoginButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("azure-ad", {
          redirect: true,
          redirectTo: "/dashboard",
        });
      }}
    >
      <Button type="submit" variant="outline" className="w-full">
        Sign in
      </Button>
    </form>
  );
};

export default LoginButton;
