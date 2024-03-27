"use client";

import { AnimatePresence, motion } from "framer-motion";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Skill } from "../Skill";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { ISkillCollapsibleProps } from "./types";
import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";

export function SkillCollapsible({
  skillType,
  skills,
}: ISkillCollapsibleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      custom={3}
      viewport={{ once: false }}
    >
      <Collapsible
        defaultOpen={skillType === "Front-end" ? true : false}
        className="flex flex-col justify-center items-center gap-12"
      >
        <CollapsibleTrigger className="flex flex-row gap-3 hover:brightness-150 active:backdrop-brightness-200 transition active:scale-95">
          <h3 className="font-headline_three text-custom_white-light">
            {skillType}
          </h3>
          <div className="flex flex-col">
            <FiChevronUp size={24} className="text-custom_primary" />
            <FiChevronDown size={24} className="text-custom_primary" />
          </div>
        </CollapsibleTrigger>
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <CollapsibleContent className="flex flex-row justify-center items-center flex-wrap gap-6 max-w-[920px] gap-y-10">
              {skills.map((skill) => (
                <motion.div key={skill.id} variants={childVariants}>
                  <Skill
                    name={skill.name}
                    image={skill.image}
                    alternativeText={skill.alternativeText}
                    description={skill.description}
                  />
                </motion.div>
              ))}
            </CollapsibleContent>
          </motion.div>
        </AnimatePresence>
      </Collapsible>
    </motion.div>
  );
}
