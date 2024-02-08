import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {auth} from "@/lib/auth";


export const dynamic = 'force-dynamic';



export default async function TeacherDashboardPage() {
	const session = await auth();
  const firstName = session?.user?.name!.split(' ')[0];
  const email = session?.user?.email!;
	return (
		
	)
}