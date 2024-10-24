import Form from "next/form";
import { Link } from "next-view-transitions";
import { Button } from "@local/ui/button";

const LoginButton = () => {
  return (
    <div className="flex py-2">
      <Button type="submit" variant="outline" className="w-full" asChild>
        <Link href="/api/auth/login" className="w-full">
          Sign in
        </Link>
      </Button>
    </div>
  );
};

export default LoginButton;
