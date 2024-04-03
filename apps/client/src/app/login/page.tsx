import { signIn } from "@local/auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginForm() {
  return (
    <Card className="flex w-full max-w-sm flex-col items-center justify-center text-center align-middle">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Sign in with your district account</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter>
        <form
          action={async () => {
            "use server";
            await signIn("azure-ad");
          }}
        >
          <Button type="submit" variant="outline" className="w-full">
            Sign in
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoginForm />
    </div>
  );
}
