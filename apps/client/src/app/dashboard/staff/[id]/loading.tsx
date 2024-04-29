import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative flex flex-1 items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
}
