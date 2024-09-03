import { logger } from "@local/utils";

import { env } from "../../env";

interface emailData {
  to?: string;
  message: string;
  subject: string;
}

export default async function sendEmail(data: emailData) {
  try {
    await fetch(`${env.EMAIL_API}}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.EMAIL_API_KEY,
      },
      body: JSON.stringify({
        to: data.to ?? env.TECH_DEPARTMENT_EMAILS.join(","),
        from: "FLEXROSTER Update",
        subject: data.subject,
        html: `${data.message}`,
      }),
    });
  } catch (error) {
    logger.error(`Error sending email: ${error}`);
  }
}
