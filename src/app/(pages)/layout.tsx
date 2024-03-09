import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { cn } from "../lib/utils";
import { fontMuktaVariable, fontSairaVariable } from "../ui/fonts";

export const metadata: Metadata = {
  title: "Mario Lima | Portfólio",
  description:
    "Mario Lima's Portfolio, a frontend and mobile engineer with +3 years of professional experience, specializing in ReactJS, NextJS and React Native.",
  authors: {
    name: "Mario Augusto de Lima",
  },
  creator: "Mario Augusto de Lima",
  category: "developer-portfolio",
  keywords:
    "developer, engineer, frontend, mobile, react, javascript, nextjs, typescript, react native",
  icons: {
    icon: "/logo/logo.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Mario Lima | Portfólio",
    description:
      "Mario Lima's Portfolio, a frontend and mobile engineer with +3 years of professional experience, specializing in ReactJS, NextJS and React Native.",
    title: "Mario Lima | Portfólio",
    url: "https://marioagustolima.com.br",
    images: [
      {
        url: "https://marioaugustodelima.com.br/openGraph/open-graph-thumbnail.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontMuktaVariable,
          fontSairaVariable,
          "antialiased font-mukta"
        )}
      >
        {children}
      </body>
    </html>
  );
}
