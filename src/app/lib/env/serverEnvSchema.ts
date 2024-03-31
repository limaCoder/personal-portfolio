import { z } from "zod";

const envSchema = z.object({
  DISCORD_WEBHOOK_CONTACT_FORM: z.string().url(),
  NOTION_API_KEY: z.string(),
  NOTION_EXPERIENCES_DATABASE_ID: z.string(),
  NOTION_PROJECTS_DATABASE_ID: z.string(),
  NOTION_SKILLS_DATABASE_ID: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error("Invalid environment variables.");
}

export const envServerSchema = parsedEnv.data;
