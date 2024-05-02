import { toast } from "sonner";

import { getErrorMessage } from "@/lib/errorHandler";
import { deleteComment } from "./actions";

export function deleteComments({
  teacherId,
  onSuccess,
}: {
  teacherId: string;
  onSuccess?: () => void;
}) {
  toast.promise(async () => await deleteComment(teacherId), {
    loading: "Deleting comment...",
    success: () => {
      onSuccess?.();
      return "Comment deleted successfully";
    },
    error: (err) => getErrorMessage(err),
  });
}
