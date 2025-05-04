import type { Metadata } from "next";

import "@/styles/globals.css";
import { cn } from "@/lib/tailwind/cn";

import { fontMuktaVariable, fontSairaVariable } from "../styles/fonts";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/toaster";

import { MainMetadata } from "./metadata";

export const metadata: Metadata = MainMetadata;

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
