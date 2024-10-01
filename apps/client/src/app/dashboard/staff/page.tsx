import type { SearchParams } from "@/hooks/types";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";
import { searchParamsValidator } from "@local/utils";

import { getRosters } from "../_components/logic/queries";
import AllRosterTable from "../_components/tables/AllRosterTable";

export default function StaffPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const search = searchParamsValidator.parse(searchParams);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>All Rosters</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Loader2 className="h-2 w-2 animate-spin" />}>
            <AllRosterTable dataPromise={getRosters(search)} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
