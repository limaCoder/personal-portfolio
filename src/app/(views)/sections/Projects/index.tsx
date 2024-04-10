import { Suspense } from "react";

import { BackgroundBeams } from "@/app/components/ui/background-beams";

import { IProjectsProps } from "./types";
import { Project } from "@/app/components/Project";

export function ProjectsSection({ projects }: IProjectsProps) {
  return (
    <section
      id="projects"
      className="min-h-screen xl:min-h-[50vh] w-full relative py-20 bg-gradient_dark"
    >
      <div className="container relative h-full w-full z-20">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="flex flex-col gap-8">
            <h2 className="font-headline_one text-custom_secondary-light">
              Projects
            </h2>
            <p className="font-body_two text-custom_white-dark">
              Here are some of the personal projects I have worked on.
            </p>
          </div>
          <div className="flex flex-col">
            <Suspense>
              {projects.map((project) => (
                <Project
                  key={project.id}
                  projectName={project.projectName}
                  projectImage={project.projectImage.url}
                  projectImageAltText={project.projectImageAltText}
                  techImage={project.techImage.url}
                  techImageAltText={project.techImageAltText}
                  techName={project.techName}
                  projectLink={project.projectLink}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
      <BackgroundBeams className="z-10" />
    </section>
  );
}
