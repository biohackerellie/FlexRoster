import Form from "next/form";

import { signIn } from "@local/auth";
import { Button } from "@local/ui/button";

const LoginButton = () => {
  return (
    <div className="flex py-2">
      <Form
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
      </Form>
    </div>
  );
};

export default LoginButton;
