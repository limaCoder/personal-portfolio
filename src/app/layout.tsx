import type { Metadata } from "next";

import "@/app/ui/globals.css";
import { cn } from "@/app/lib/tailwind/cn";

import { fontMuktaVariable, fontSairaVariable } from "./ui/fonts";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

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
    icon: "/logo.ico",
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
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
