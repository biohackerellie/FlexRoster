import { Navbar } from "@/components/ui/navbar";

export default function teacherLayout({
  children,
  portals,
}: {
  children: React.ReactNode;
  portals: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar
        navItems={[
          {
            name: "Home",
            link: "/dashboard",
          },
          {
            name: "Requests",
            link: "/dashboard/teacher/requests",
          },
          {
            name: "Messages",
            link: "/dashboard/chat",
          },
        ]}
      />
      {children}
      {portals}
    </div>
  );
}
