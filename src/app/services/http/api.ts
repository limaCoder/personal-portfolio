import { envClientSchema } from "@/app/clientEnvSchema";

export function api(path: string, init?: RequestInit) {
  const baseUrl = envClientSchema.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(path, baseUrl);

  return fetch(url, init);
}
