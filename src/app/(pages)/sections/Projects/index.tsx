import { projects } from "./projects";

import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { Project } from "@/app/components/Project";

export function ProjectsSection() {
  return (
    <section className="min-h-screen w-full relative py-20 bg-gradient_dark">
      <div className="container relative h-full w-full z-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <h2 className="font-headline_one text-custom_secondary-light">
              Projects
            </h2>
            <p className="font-body_two text-custom_white-dark">
              Here are some of the personal projects I have worked on.
            </p>
          </div>
          <div className="flex flex-col">
            {projects.map((project) => (
              <Project
                key={project.id}
                projectName={project.projectName}
                techImage={project.techImage}
                techImageAltText={project.techImageAltText}
                techName={project.techName}
              />
            ))}
          </div>
        </div>
      </div>
      <BackgroundBeams className="z-10" />
    </section>
  );
}
