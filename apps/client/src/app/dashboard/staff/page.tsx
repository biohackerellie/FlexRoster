import type { SearchParams } from "@/hooks/types";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import { Shell } from "@local/ui/shell";
import { searchParamsValidator } from "@local/validators";

import AllRosterTable from "./_components/AllRosterTable";
import { getRosters } from "./_components/queries";

export default function StaffPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const search = searchParamsValidator.parse(searchParams);
  return (
    <Shell>
      <Suspense fallback={<Loader2 className="h-2 w-2 animate-spin" />}>
        <AllRosterTable dataPromise={getRosters(search)} />
      </Suspense>
    </Shell>
  );
}
