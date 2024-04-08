import { fetchHygraphQuery } from "../..";
import { HomePageData } from "./types";

export const getHomePageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        workExperiences {
          uniqueId
          companyName
          companyImage {
            url
          }
          companyUrl
          role
          periodInCompany
          description
        }
      }
    }
  `;

  const data = await fetchHygraphQuery<HomePageData>(
    query,
    1000 * 60 * 60 * 24 // 1 day
  );

  return data;
};
