import { signIn } from "@local/auth";
import { Button } from "@local/ui/button";

const LoginButton = () => {
  return (
    <div className="flex py-2">
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
    </div>
  );
};

export default LoginButton;
