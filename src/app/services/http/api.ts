import { env } from "@/app/lib/env/env";

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;

  if (baseUrl) {
    return null;
  }

  const url = new URL(path, baseUrl);

  return fetch(url, init);
}
