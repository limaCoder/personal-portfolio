"use client";

import { motion } from "framer-motion";

import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { Project } from "@/app/components/Project";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { projects } from "./projects";

export function ProjectsSection() {
  return (
    <section className="min-h-screen w-full relative py-20 bg-gradient_dark">
      <div className="container relative h-full w-full z-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <motion.h2
              className="font-headline_one text-custom_secondary-light"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: false }}
            >
              Projects
            </motion.h2>
            <motion.p
              className="font-body_two text-custom_white-dark"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: false }}
            >
              Here are some of the personal projects I have worked on.
            </motion.p>
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
