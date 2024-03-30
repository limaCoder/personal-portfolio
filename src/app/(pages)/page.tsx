import React, { Fragment } from "react";

import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";
import { ServicesSection } from "./sections/Services";
import { ExperiencesSection } from "./sections/Experiences";
import { ProjectsSection } from "./sections/Projects";
import { SkillsSection } from "./sections/Skills";
import { ContactSection } from "./sections/Contact";

export default function Home() {
  return (
    <Fragment>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperiencesSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </Fragment>
  );
}
