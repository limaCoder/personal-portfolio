import { env } from "@/app/lib/env";

export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number
): Promise<T> => {
  const response = await fetch(env.HYGRAPH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${env.HYGRAPH_TOKEN}`,
    },
    next: {
      revalidate,
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data } = await response.json();

  return data;
};
