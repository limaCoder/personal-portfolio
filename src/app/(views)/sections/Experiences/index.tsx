import { Experience } from "@/components/Experience";
import { IExperiencesProps } from "./types";

export function ExperiencesSection({ workExperiences }: IExperiencesProps) {
  const orderedWorkExperiences = workExperiences?.sort(
    (a, b) => a.uniqueId - b.uniqueId
  );

  return (
    <section
      id="experiences"
      className="min-h-screen xl:min-h-[85vh] w-full relative pt-20 bg-gradient_dark"
    >
      <div className="container h-full w-full">
        <div className="flex flex-col justify-center items-center gap-20">
          <h2 className="font-headline_two text-custom_secondary-light">
            Professional Experiences
          </h2>
          <div className="w-full flex flex-col gap-8">
            {orderedWorkExperiences?.map((workExperience) => (
              <Experience
                key={workExperience.companyName}
                workExperience={workExperience}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
