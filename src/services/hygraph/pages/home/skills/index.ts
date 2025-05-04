import { fetchHygraphQuery } from "../../..";
import { HomePageInfo, Skill } from "../types";

export const getSkillsData = async (): Promise<Skill[]> => {
  const query = `
    query SkillsQuery {
      skills(first: 46, orderBy: uniqueId_ASC) {
        uniqueId
        name
        skillType
        description
        image {
          url
        }
        alternativeText
      }
    }
  `;

  const data = await fetchHygraphQuery<HomePageInfo>(
    query,
    1000 * 60 * 60 * 24 // 1 day
  );

  const { skills } = data;

  return skills;
};
