import { db, eq, schema } from "@local/db";

export async function setRoomStatus() {
  return null
}

setRoomStatus().catch((e) => {
  console.error(e);
  process.exit(1);
});
