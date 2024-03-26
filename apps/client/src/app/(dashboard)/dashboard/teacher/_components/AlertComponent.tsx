import Link from "next/link";

import { messageAlerts } from "@local/validators/types";

import { Button } from "@/components/ui/button";
import { chatHrefConstructor } from "@/lib/utils";

type Props = {
  messageAlerts: messageAlerts;
  userId: string;
};

export function AlertComponent({ messageAlerts, userId }: Props) {
  return (
    <div className="inset-1 flex w-full justify-between gap-4 p-2">
      <span className="font-semibold">{messageAlerts.chatPartnerName}</span>
      <Button variant="outline" size="sm">
        <Link
          href={`/dashboard/chat/${chatHrefConstructor(messageAlerts.chatPartnerId, userId)}`}
        >
          Messages
        </Link>
      </Button>
    </div>
  );
}
