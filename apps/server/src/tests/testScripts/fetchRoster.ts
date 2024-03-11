import { db, schema } from "@local/db";

import { env } from "~/env";
import { fetcher, icAuth } from "~/lib/utils";

async function RosterTest() {
  try {
    const token = await icAuth();
    const classes = await db.query.classrooms.findFirst({});
    const id = classes?.id;
    const data = await fetcher(
      `${env.IC_BASE_QUERY}/classes/${id}/students?limit=100&ext_basic=true`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-XSRF-TOKEN": env.XSRF_TOKEN,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(data);
    process.exit(0);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Error fetching roster");
    }
  }
}

RosterTest().catch((e) => {
  console.error(e);
  process.exit(1);
});
