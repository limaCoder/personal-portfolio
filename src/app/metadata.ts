import { Metadata } from "next";

const MainMetadata: Metadata = {
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

export { MainMetadata };
