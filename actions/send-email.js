import EmailTemplate from "@/emails/template";
import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  console.log("sendEmail called with:", { to, subject, react }); // Debug log

  const resend = new Resend(process.env.RESEND_API_KEY || "");

  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing!");
    return { success: false, error: "Missing API key" };
  }

  try {
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    console.log("Email sent successfully:", data); // Debug log
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error); // Better error logging
    return { success: false, error: error.message || error };
  }
}
