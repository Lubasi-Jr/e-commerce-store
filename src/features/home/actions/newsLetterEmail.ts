"use server";
import { Resend } from "resend";
import { toast } from "sonner";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const receiverEmail = formData.get("email") as string;
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tekkstyles@gmail.com",
    subject: "STYLAS Newsletter",
    text: "Thank you for subscribing to our newsletter",
  });
};
