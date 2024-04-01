"use server";

import { Client } from "@notionhq/client";

import { NotionExperiencesDatabaseResponse } from "./types";
import { env } from "@/app/lib/env/env";

const notion = new Client({ auth: env.NOTION_API_KEY });

export async function getExperiences() {
  const response = await notion.databases.query({
    database_id: env.NOTION_EXPERIENCES_DATABASE_ID,
  });

  const typedResponse =
    response as unknown as NotionExperiencesDatabaseResponse;

  return typedResponse.results.map((experience) => {
    return {
      id: experience?.properties?.id?.unique_id?.number,
      name: experience?.properties?.name?.title[0]?.plain_text,
      imageUrl: experience?.properties?.imageUrl?.rich_text[0]?.plain_text,
      companyURL: experience?.properties?.companyURL?.rich_text[0]?.plain_text,
      role: experience?.properties?.role?.rich_text[0]?.plain_text,
      periodInCompany:
        experience?.properties?.periodInCompany?.rich_text[0]?.plain_text,
      description:
        experience?.properties?.description?.rich_text[0]?.plain_text,
    };
  });
}
