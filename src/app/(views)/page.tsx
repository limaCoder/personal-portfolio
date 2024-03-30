import React, { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";

import { HeroSection } from "./sections/Hero";

const AboutSection = dynamic(() =>
  import("./sections/About").then((mod) => mod.AboutSection)
);

const ServicesSection = React.lazy(() =>
  import("./sections/Services").then((mod) => ({
    default: mod.ServicesSection,
  }))
);

const ExperiencesSection = dynamic(() =>
  import("./sections/Experiences").then((mod) => mod.ExperiencesSection)
);
const ProjectsSection = dynamic(() =>
  import("./sections/Projects").then((mod) => mod.ProjectsSection)
);
const SkillsSection = dynamic(() =>
  import("./sections/Skills").then((mod) => mod.SkillsSection)
);
const ContactSection = dynamic(() =>
  import("./sections/Contact").then((mod) => mod.ContactSection)
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
