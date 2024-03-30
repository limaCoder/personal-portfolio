import { companies } from "./companies";
import { Experience } from "@/app/components/Experience";

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="min-h-screen w-full relative py-20 bg-gradient_dark"
    >
      <div className="container h-full w-full">
        <div className="flex flex-col justify-center items-center gap-20">
          <h2 className="font-headline_two text-custom_secondary-light">
            Professional Experiences
          </h2>
          <div className="max-w-[1002px]">
            {companies.map((company) => (
              <Experience key={company.name} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
