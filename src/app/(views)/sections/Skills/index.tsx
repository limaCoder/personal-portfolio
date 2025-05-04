import { SkillCollapsible } from "@/components/SkillCollapsible";

import { ISkillsSectionProps } from "./types";

export function SkillsSection({ skills }: ISkillsSectionProps) {
  const skillsTypes = skills.map((skill) => skill.skillType);

  const flatSkillsTypes = skillsTypes.flat();

  const uniqueSkillsTypes = Array.from(new Set(flatSkillsTypes));

  return (
    <section
      id="skills"
      className="min-h-screen w-full relative py-20 bg-gradient_dark"
    >
      <div className="container h-full w-full">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className="text-center font-headline_two text-custom_secondary-light">
              Techs and uses
            </h2>
            <p className="font-body_one text-custom_white-dark text-center max-w-[1025px]">
              Discover the array of technologies and tools that drive my
              development journey. Each carefully selected tool is utilized to
              craft robust, efficient, and user-centric solutions, ensuring
              excellence in every project.
            </p>
          </div>
          <div className="flex flex-col gap-16 justify-center items-center">
            {uniqueSkillsTypes.map((skillType) => (
              <SkillCollapsible key={skillType} skillType={skillType} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
