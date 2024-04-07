import { SkillCollapsible } from "@/app/components/SkillCollapsible";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import {
  MotionHeadlineTwo,
  MotionParagraph,
} from "@/app/lib/framer-motion/MotionComponents";

import { getSkills } from "@/app/services/notion/skills";
import { skillsOrder } from "@/constants/skillsOrder";

export async function SkillsSection() {
  const skills = await getSkills();

  const skillsTypes = skills.map((skill) =>
    skill.skillType.map((type) => type)
  );

  const flatSkillsTypes = skillsTypes.flat();

  const uniqueSkillsTypes = Array.from(new Set(flatSkillsTypes));

  const orderedSkills = uniqueSkillsTypes.sort((a, b) => {
    return skillsOrder.indexOf(a) - skillsOrder.indexOf(b);
  });

  return (
    <section
      id="skills"
      className="min-h-screen w-full relative py-20 bg-gradient_dark"
    >
      <div className="container h-full w-full">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col justify-center items-center gap-8">
            <MotionHeadlineTwo
              className="text-center font-headline_two text-custom_secondary-light"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Techs and uses
            </MotionHeadlineTwo>
            <MotionParagraph
              className="font-body_one text-custom_white-dark text-center max-w-[1025px]"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Discover the array of technologies and tools that drive my
              development journey. Each carefully selected tool is utilized to
              craft robust, efficient, and user-centric solutions, ensuring
              excellence in every project.
            </MotionParagraph>
          </div>
          <div className="flex flex-col gap-16 justify-center items-center">
            {orderedSkills.map((skillType) => (
              <SkillCollapsible key={skillType} skillType={skillType} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
