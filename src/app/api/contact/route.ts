import { env } from "@/app/lib/env";

import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

const WEBHOOK_URL = env.DISCORD_WEBHOOK_CONTACT_FORM;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = bodySchema.parse(body);

    const messageData = {
      embeds: [
        {
          title: "Contact message",
          color: 5814783,
          fields: [
            {
              name: "Name",
              value: name,
              inline: true,
            },
            {
              name: "E-mail",
              value: email,
              inline: true,
            },
            {
              name: "Subject:",
              value: subject,
            },
            {
              name: "Message:",
              value: message,
            },
          ],
        },
      ],
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    if (!response.ok) {
      console.error("There was an error! Try again later!");
      console.error("Erro do Discord:", await response.text());
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message sent with success!" });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
