import { BackgroundBeams } from "@/app/components/ui/background-beams";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import {
  MotionHeadlineTwo,
  MotionParagraph,
} from "@/app/lib/framer-motion/MotionComponents";

import { getProjects } from "@/app/services/notion/projects";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { IProjectsProps } from "./types";

const Project = dynamic(() =>
  import("@/app/components/Project").then((mod) => mod.Project)
);

export const revalidate = 1000 * 60 * 60;

export async function ProjectsSection({ projects }: IProjectsProps) {
  return (
    <section
      id="projects"
      className="min-h-screen w-full relative py-20 bg-gradient_dark"
    >
      <div className="container relative h-full w-full z-20">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="flex flex-col gap-8">
            <MotionHeadlineTwo
              className="font-headline_one text-custom_secondary-light"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Projects
            </MotionHeadlineTwo>
            <MotionParagraph
              className="font-body_two text-custom_white-dark"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Here are some of the personal projects I have worked on.
            </MotionParagraph>
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
