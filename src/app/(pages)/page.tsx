import React from "react";

import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </React.Fragment>
  );
}
