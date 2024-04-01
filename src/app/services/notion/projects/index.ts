"use server";

import { Client } from "@notionhq/client";

import { NotionProjectsDatabaseResponse } from "./types";
import { env } from "@/app/lib/env/env";

const notion = new Client({ auth: env.NOTION_API_KEY });

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: env.NOTION_PROJECTS_DATABASE_ID,
  });

  const typedResponse = response as unknown as NotionProjectsDatabaseResponse;

  return typedResponse.results.map((project) => {
    return {
      id: project?.properties?.id?.unique_id?.number,
      projectName: project?.properties?.projectName?.title[0]?.plain_text,
      projectImage: project?.properties?.projectImage?.files[0]?.file.url,
      projectImageAltText:
        project?.properties?.projectImageAltText?.rich_text[0]?.plain_text,
      techImage: project?.properties?.techImage?.files[0]?.file.url,
      techImageAltText:
        project?.properties?.projectImageAltText?.rich_text[0]?.plain_text,
      techName: project?.properties?.techName?.rich_text[0]?.plain_text,
      projectLink: project?.properties?.projectLink?.rich_text[0]?.plain_text,
    };
  });
}
