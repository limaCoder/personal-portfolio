import React, { Fragment } from "react";

import { HeroSection } from "./(views)/sections/Hero";
import { AboutSection } from "./(views)/sections/About";
import { ServicesSection } from "./(views)/sections/Services";
import { ExperiencesSection } from "./(views)/sections/Experiences";
import { ProjectsSection } from "./(views)/sections/Projects";
import { SkillsSection } from "./(views)/sections/Skills";
import { ContactSection } from "./(views)/sections/Contact";

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
