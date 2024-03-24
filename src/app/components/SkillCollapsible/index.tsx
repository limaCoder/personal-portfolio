import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Skill } from "../Skill";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { ISkillCollapsibleProps } from "./types";

export function SkillCollapsible({
  skillType,
  skills,
}: ISkillCollapsibleProps) {
  return (
    <Collapsible
      defaultOpen={skillType === "Front-end" ? true : false}
      className="flex flex-col justify-center items-center gap-12"
    >
      <CollapsibleTrigger className="flex flex-row gap-3 hover:brightness-150 active:backdrop-brightness-200 transition">
        <h3 className="font-headline_three text-custom_white-light">
          {skillType}
        </h3>
        <div className="flex flex-col">
          <FiChevronUp size={24} className="text-custom_primary" />
          <FiChevronDown size={24} className="text-custom_primary" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-row justify-center items-center flex-wrap gap-6 max-w-[920px] gap-y-10">
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            name={skill.name}
            image={skill.image}
            alternativeText={skill.alternativeText}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
