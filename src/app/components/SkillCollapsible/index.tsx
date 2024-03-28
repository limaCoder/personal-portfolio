"use client";

import { AnimatePresence } from "framer-motion";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Skill } from "../Skill";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { ISkillCollapsibleProps } from "./types";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { scrollTransition } from "@/app/lib/framer-motion/client/scrollTransition";
import { MotionDiv } from "@/app/lib/framer-motion/MotionComponents";

export function SkillCollapsible({
  skillType,
  skills,
}: ISkillCollapsibleProps) {
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { y: -20, opacity: 0, transition: { duration: 2 } },
  };

  return (
    <MotionDiv
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      transition={scrollTransition(3)}
      viewport={{ once: false }}
    >
      <Collapsible
        className="flex flex-col justify-center items-center gap-12"
        defaultOpen={skillType === "Front-end" ? true : false}
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
        <CollapsibleContent className="flex flex-row justify-center items-center flex-wrap gap-6 max-w-[920px] gap-y-10">
          <AnimatePresence mode="popLayout">
            {skills.map((skill) => (
              <MotionDiv
                key={skill.id}
                variants={childVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Skill
                  key={skill.id}
                  name={skill.name}
                  image={skill.image}
                  alternativeText={skill.alternativeText}
                  description={skill.description}
                />
              </MotionDiv>
            ))}
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </MotionDiv>
  );
}
