import React from "react";
import { HeroSection } from "./sections/Hero";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
      </main>
    </React.Fragment>
  );
}
