import React, { Fragment } from "react";

import { HeroSection } from "./(views)/sections/Hero";
import { AboutSection } from "./(views)/sections/About";
import { ServicesSection } from "./(views)/sections/Services";
import { ExperiencesSection } from "./(views)/sections/Experiences";
import { ProjectsSection } from "./(views)/sections/Projects";
import { SkillsSection } from "./(views)/sections/Skills";
import { ContactSection } from "./(views)/sections/Contact";
import { getHomePageData } from "../services/hygraph/pages/home";

export default async function Home() {
  const { page: pageInfo } = await getHomePageData();

  const { workExperiences, projects, skills } = pageInfo;

  return (
    <Fragment>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperiencesSection workExperiences={workExperiences} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection />
      </main>
    </Fragment>
  );
}
