import { toast } from "sonner";

import { getErrorMessage } from "@/lib/errorHandler";
import {
  deleteComment,
  setAvailability,
  setTodayAvailability,
} from "./actions";

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

export function updateAvailability({
  teacherId,
  classroomId,
  status,
  onSuccess,
}: {
  teacherId: string;
  classroomId: string;
  status: boolean;
  onSuccess?: () => void;
}) {
  toast.promise(
    async () => await setTodayAvailability(classroomId, teacherId, status),
    {
      loading: "Updating availability...",
      success: () => {
        onSuccess?.();
        return "Availability updated successfully";
      },
      error: (err) => getErrorMessage(err),
    },
  );
}
