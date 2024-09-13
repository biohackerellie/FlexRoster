import { logger } from "@local/utils";

interface emailData {
  to?: string;
  message: string;
  subject: string;
}

export default async function sendEmail(data: emailData) {
  try {
    const toEmail = data.to ?? process.env.TECH_DEPARTMENT_EMAILS;
    const res = await fetch(`${process.env.EMAIL_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.EMAIL_API_KEY!,
      },
      body: JSON.stringify({
        to: toEmail,
        from: "FLEXROSTER Update",
        subject: data.subject,
        html: `${data.message}`,
      }),
    });
    logger.info(`Email sent: ${res.status}`);
  } catch (error) {
    logger.error(`Error sending email: ${error}`);
  }
}
