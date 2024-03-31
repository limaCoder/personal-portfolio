import React, { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";

import { HeroSection } from "./(views)/sections/Hero";

const AboutSection = dynamic(() =>
  import("./(views)/sections/About").then((mod) => mod.AboutSection)
);

const ServicesSection = React.lazy(() =>
  import("./(views)/sections/Services").then((mod) => ({
    default: mod.ServicesSection,
  }))
);

const ExperiencesSection = dynamic(() =>
  import("./(views)/sections/Experiences").then((mod) => mod.ExperiencesSection)
);
const ProjectsSection = dynamic(() =>
  import("./(views)/sections/Projects").then((mod) => mod.ProjectsSection)
);
const SkillsSection = dynamic(() =>
  import("./(views)/sections/Skills").then((mod) => mod.SkillsSection)
);
const ContactSection = dynamic(() =>
  import("./(views)/sections/Contact").then((mod) => mod.ContactSection)
);

export default function Home() {
  return (
    <Fragment>
      <main>
        <HeroSection />
        <Suspense>
          <AboutSection />
          <ServicesSection />
          <ExperiencesSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Suspense>
      </main>
    </Fragment>
  );
}
