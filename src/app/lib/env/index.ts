import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DISCORD_WEBHOOK_CONTACT_FORM: z.string().url(),
    NOTION_API_KEY: z.string(),
    NOTION_EXPERIENCES_DATABASE_ID: z.string(),
    NOTION_PROJECTS_DATABASE_ID: z.string(),
    NOTION_SKILLS_DATABASE_ID: z.string(),
    HYGRAPH_URL: z.string(),
    HYGRAPH_TOKEN: z.string(),
  },

  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnv: {
    // local
    // NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    // production
    NEXT_PUBLIC_API_BASE_URL: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    DISCORD_WEBHOOK_CONTACT_FORM: process.env.DISCORD_WEBHOOK_CONTACT_FORM,
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_EXPERIENCES_DATABASE_ID: process.env.NOTION_EXPERIENCES_DATABASE_ID,
    NOTION_PROJECTS_DATABASE_ID: process.env.NOTION_PROJECTS_DATABASE_ID,
    NOTION_SKILLS_DATABASE_ID: process.env.NOTION_SKILLS_DATABASE_ID,
    HYGRAPH_URL: process.env.HYGRAPH_URL,
    HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN,
  },
});
