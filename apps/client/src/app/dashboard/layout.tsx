import { Shell } from "@local/ui/shell";

export default function staffDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  "use memo";

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Shell>{children}</Shell>
      </div>
    </div>
  );
}
