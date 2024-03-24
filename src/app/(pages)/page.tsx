import React from "react";

import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";
import { ServicesSection } from "./sections/Services";
import { ExperiencesSection } from "./sections/Experiences";
import { ProjectsSection } from "./sections/Projects";
import { SkillsSection } from "./sections/Skills";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperiencesSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}
