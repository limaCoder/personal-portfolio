"use server";

import { Client } from "@notionhq/client";

import { NotionSkillsDatabaseResponse } from "./types";
import { env } from "@/app/lib/env";

const notion = new Client({ auth: env.NOTION_API_KEY });

export async function getSkills() {
  const response = await notion.databases.query({
    database_id: env.NOTION_SKILLS_DATABASE_ID,
  });

  const typedResponse = response as unknown as NotionSkillsDatabaseResponse;

  return typedResponse.results.map((skill) => {
    return {
      id: skill?.properties?.id?.unique_id?.number,
      name: skill?.properties?.name?.title[0]?.plain_text,
      skillType: skill?.properties?.skillType?.multi_select?.map(
        (type) => type?.name
      ),
      description: skill?.properties?.description?.rich_text[0]?.plain_text,
      image: skill?.properties?.image?.files[0]?.file.url,
      alternativeText:
        skill?.properties?.alternativeText?.rich_text[0]?.plain_text,
    };
  });
}
