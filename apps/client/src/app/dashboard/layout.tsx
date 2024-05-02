import { notFound } from "next/navigation";

import { auth } from "@local/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@local/ui/alert-dialog";
import { Button } from "@local/ui/button";

import { ModeToggle } from "@/components/darkmodeToggle";
import { Navbar } from "@/components/navbar";
import { greetings } from "@/lib/constants";

export default async function staffDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    return notFound();
  }
  const getRandomGreeting = () => {
    return greetings[Math.floor(Math.random() * greetings.length)];
  };
  const role = session?.user?.roles;
  const greeting = role === "student" ? getRandomGreeting() : "Hello, ";
  const userId = session?.user?.id;
  const firstName = session?.user?.name!.split(" ")[0] ?? "";
  return (
    <div className="flex h-screen flex-col">
      <div className="flex min-h-screen w-full flex-col ">
        <div className="flex flex-col sm:gap-4 sm:py-2 sm:pl-14">
          <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <h1 className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold">
              {greeting} {firstName}
            </h1>
          </div>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex items-center">
              <Navbar role={role} userId={userId} />
              <div className="ml-auto flex items-center gap-2">
                {role === "teacher" && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" className="h-8 gap-1">
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Reset Roster
                        </span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Reset Roster</AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogDescription>
                        This will reset your roster to your class default.{" "}
                        <br /> <strong>This action cannot be undone</strong>.
                      </AlertDialogDescription>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Reset</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                <ModeToggle />
              </div>
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
