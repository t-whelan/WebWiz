"use server";
import responseMessages from "@/utils/response-messages";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendMessage = async (
  prevState: { message: string },
  formData: FormData
) => {
  if (
    prevState.message === responseMessages.success ||
    prevState.message === responseMessages.alreadySent
  ) {
    return {
      message: responseMessages.alreadySent,
    };
  }

  const schema = z.object({
    name: z.string().min(1),
    company: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parse.success) {
    return {
      message: responseMessages.failed,
    };
  }
  const { name, company, email, message } = parse.data;
  try {
   
    await resend.emails.send({
      from: `${company} <onboarding@resend.dev>`,
      to: "test@test.com",
      subject: ` New message from ${name}`,
      html: `<p>${email}:<br/></br> ${message}</p>`,
    });

    return {
      message: responseMessages.success,
    };
  } catch (e) {
    return {
      message: responseMessages.failed,
    };
  }
};
