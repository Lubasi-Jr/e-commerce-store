import { Resend } from "resend";
import { EmailTemplate } from "@/components/ui/email-template";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json(); // Assuming the body contains { email: "receiver@example.com" }

    if (!email) {
      return Response.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Lubasi Milupi <lubasimilupi@gmail.com>",
      to: [email],
      subject: "STYLAS Newsletter",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
