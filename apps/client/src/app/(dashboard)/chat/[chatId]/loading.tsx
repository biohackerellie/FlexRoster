import * as React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const loading: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center">
      <Skeleton className="h-32 w-32 animate-pulse rounded-full" />
    </div>
  );
};

export default loading;
