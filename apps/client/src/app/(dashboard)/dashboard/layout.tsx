import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLEX | Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full">
      <div className="container max-h-screen w-full py-16 md:py-12">
        {children}
      </div>
    </div>
  );
}
