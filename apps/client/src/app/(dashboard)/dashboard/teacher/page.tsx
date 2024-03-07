import { auth } from "@local/auth";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const dynamic = "force-dynamic";

export default async function TeacherDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0];
  const email = session?.user?.email!;
  return <></>;
}
