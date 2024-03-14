import React from "react";

import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";
import { ServicesSection } from "./sections/Services";
import { ExperiencesSection } from "./sections/Experiences";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperiencesSection />
      </main>
    </React.Fragment>
  );
}
