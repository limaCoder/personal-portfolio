"use client";

import { motion } from "framer-motion";
import { SkillCollapsible } from "@/app/components/SkillCollapsible";

import { skillsSections } from "./skills";
import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";

export function SkillsSection() {
  return (
    <section className="min-h-screen w-full relative py-20 bg-gradient_dark">
      <div className="container h-full w-full">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col justify-center items-center gap-8">
            <motion.h2
              className="font-headline_two text-custom_secondary-light"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: false }}
            >
              Techs and uses
            </motion.h2>
            <motion.p
              className="font-body_one text-custom_white-dark text-center max-w-[1025px]"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: false }}
            >
              Discover the array of technologies and tools that drive my
              development journey. Each carefully selected tool is utilized to
              craft robust, efficient, and user-centric solutions, ensuring
              excellence in every project.
            </motion.p>
          </div>
          <div className="flex flex-col gap-16 justify-center items-center">
            {skillsSections.map((skillSection) => (
              <SkillCollapsible
                key={skillSection.skillType}
                skillType={skillSection.skillType}
                skills={skillSection.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
