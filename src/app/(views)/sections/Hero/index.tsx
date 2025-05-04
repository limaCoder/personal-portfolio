import { FaGithub, FaLinkedin } from "react-icons/fa";
import ParticlesBg from "@/components/ui/particles-bg";

export async function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gradient_dark min-h-[85vh] w-full relative flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 w-full h-full">
        <ParticlesBg
          particleCount={400}
          particleSpread={20}
          speed={0.2}
          particleColors={["#6867f2", "#6867f2", "#6867f2"]}
        />
      </div>
      <div className="container">
        <div className="w-full h-full z-20 relative flex flex-col justify-center items-center">
          <p className="font-body_one text-custom_white-dark">
            Hi, there!
            <strong className="text-custom_white-light ml-1">
              I’m Mario Lima
            </strong>
          </p>
          <h1 className="font-headline_one text-custom_secondary-light text-center mt-2 mb-6">
            Fullstack Developer
          </h1>
          <p className="font-body_one text-custom_white-dark text-center">
            My journey is creating digital experiences that captivate and engage
            both you and your audience.
          </p>
          <div className="flex flex-column lg:flex-row gap-7 mt-8 items-center">
            <a
              role="button"
              className="hover:brightness-150 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient_primary bg-[length:200%_100%] px-6 font-medium text-custom_white-light transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="#contact"
            >
              Contact me
            </a>
            <div className="flex flex-row gap-4">
              <a
                aria-label="Link of Mario Github's profile"
                href="https://github.com/limaCoder"
              >
                <FaGithub
                  size={24}
                  className="text-custom_secondary-dark hover:brightness-150 transition"
                />
              </a>
              <a
                aria-label="Link of Mario Linkedin's profile"
                href="https://www.linkedin.com/in/marioaulima/"
              >
                <FaLinkedin
                  size={24}
                  className="text-custom_secondary-dark hover:brightness-150 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
