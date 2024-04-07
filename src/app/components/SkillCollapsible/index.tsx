import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { ISkillCollapsibleProps } from "./types";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { MotionDiv } from "@/app/lib/framer-motion/MotionComponents";
import { childVariants } from "@/app/lib/framer-motion/childVariants";

import { getSkills } from "@/app/services/notion/skills";

const Skill = React.lazy(() =>
  import("@/app/components/Skill").then((mod) => ({
    default: mod.Skill,
  }))
);

export const revalidate = 1000 * 60 * 60;

export async function SkillCollapsible({ skillType }: ISkillCollapsibleProps) {
  const skills = await getSkills();

  const filteredSkills = skills.filter((skill) =>
    skill.skillType.includes(skillType)
  );

  const orderedSkills = filteredSkills.sort((a, b) => a.id - b.id);

  return (
    <MotionDiv
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.9 }}
    >
      <Collapsible
        className="flex flex-col justify-center items-center gap-12"
        defaultOpen={skillType === "Front-end" ? true : false}
      >
        <CollapsibleTrigger className="flex flex-row items-center gap-3 hover:brightness-150 active:backdrop-brightness-200 transition active:scale-95">
          <h3 className="font-headline_three text-custom_white-light">
            {skillType}
          </h3>
          <div className="flex flex-col">
            <FiChevronUp size={24} className="text-custom_primary" />
            <FiChevronDown size={24} className="text-custom_primary" />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-row justify-center items-center flex-wrap gap-6 max-w-[920px] gap-y-10">
          {orderedSkills.map((skill) => (
            <MotionDiv
              key={skill.id}
              variants={childVariants}
              initial="hidden"
              animate="visible"
            >
              <Skill
                key={skill.id}
                name={skill.name}
                image={skill?.image}
                alternativeText={skill.alternativeText}
                description={skill.description}
              />
            </MotionDiv>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </MotionDiv>
  );
}
