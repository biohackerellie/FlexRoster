import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <div className="justify-center pb-2 ">
        <Skeleton className="h-8 w-8" />
      </div>
      <div className="max-h-2xl container flex max-w-4xl flex-col justify-center p-4">
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
}
