import { signIn } from "@local/auth";
import { Button } from "@local/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import LoginButton from "@/components/signIn";




export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">

    <Card className="flex w-full max-w-sm flex-col items-center justify-center text-center align-middle">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Sign in with your district account</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter>
      <LoginButton />

      </CardFooter>
    </Card>
    </div>
  );
}

