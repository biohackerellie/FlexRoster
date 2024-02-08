export const dynamic = 'force-dynamic';

export default function StudentDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col  items-center  p-12">
      {children}
    </div>
  );
}
