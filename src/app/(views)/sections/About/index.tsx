import Image from "next/image";
import { FiInfo } from "react-icons/fi";

import { carouselImages } from "./carouselImages";

import {
  MotionDiv,
  MotionParagraph,
} from "@/lib/framer-motion/MotionComponents";
import { scrollVariants } from "@/lib/framer-motion/scrollVariants";
import { GlowEffect } from "@/components/ui/glow-effect";

export function AboutSection() {
  const age = new Date().getFullYear() - 2001;

  return (
    <section
      id="about"
      className="min-h-screen xl:min-h-[50vh] w-full relative py-16 bg-gradient_dark"
    >
      <div className="w-full min-h-screen xl:min-h-[50vh] p-0 absolute top-0 left-0 overflow-hidden border-t-2 border-t-custom_primary">
        <div className="w-full h-full xl:min-h-[50vh] flex flex-row justify-start items-start animate-carousel_images">
          {carouselImages.map((carouselImage, index) => (
            <div
              key={carouselImage.id}
              className="relative min-w-[590px] h-[1080px]"
            >
              <Image
                className="border-r-2 h-auto border-r-custom_primary"
                src={carouselImage.src}
                alt={carouselImage.alt}
                width={carouselImage?.width}
                height={carouselImage?.height}
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                sizes="(max-width: 768px) 100vw, 590px"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient_secondary opacity-90"></div>
      <div className="z-20 container flex flex-col justify-center items-center relative min-h-screen xl:min-h-[50vh]">
        <div className="flex flex-col gap-10">
          <h2 className="font-headline_one text-custom_white-light">
            About me
          </h2>
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="flex flex-col max-w-[425px]">
              <MotionParagraph
                className="mb-6 text-custom_white-dark font-body_two"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3 }}
              >
                I am a passionate Software Engineer with a self-taught journey
                and a career-focused vision with +4 years of experience,
                specializing in creating elegant web interfaces and interactive
                experiences. I started my career in 2020, when I dove deep into
                the world of web and mobile development, with cutting-edge
                technologies like ReactJS, React Native, Next.js, TypeScript and
                Node.js.
              </MotionParagraph>
              <MotionParagraph
                className="mb-6 text-custom_white-dark font-body_two"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                My professional journey is distinguished by collaborations with
                prominent clients and companies, including Azul Airlines,
                Hapvida, and Mutant. These experiences have not only refined my
                technical skills but also endowed me with a deep understanding
                of diverse business needs and the importance of delivering
                scalable and impactful digital solutions.
              </MotionParagraph>
              <MotionParagraph
                className="text-custom_white-dark font-body_two"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Embracing continuous learning and improvement, I leverage every
                project as an opportunity to advance my expertise and contribute
                meaningfully to the field of technology.
              </MotionParagraph>
            </div>
            <div className="flex flex-col gap-14">
              <MotionDiv
                className="flex flex-col gap-4"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-row items-center gap-4">
                  <FiInfo size={24} className="text-custom_primary-light" />
                  <p className="font-body_two text-custom_white-light max-w-[220px] sm:max-w-[100%] lg:max-w-[312px]">
                    Freelancer, Developer and UI/UX Design enthusiast.
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <FiInfo size={24} className="text-custom_primary-light" />
                  <p className="font-body_two text-custom_white-light max-w-[220px] sm:max-w-[100%] lg:max-w-[312px]">
                    Experienced in major companies like Azul, Hapvida, and
                    Mutant.
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <FiInfo size={24} className="text-custom_primary-light" />
                  <p className="font-body_two text-custom_white-light max-w-[220px] sm:max-w-[100%] lg:max-w-[312px]">
                    Lifelong learner, constantly pushing the boundaries of
                    technology
                  </p>
                </div>
              </MotionDiv>
              <div className="relative">
                <GlowEffect
                  colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={1.0}
                  className="-z-10"
                />
                <MotionDiv
                  className="relative z-10 flex flex-col md:self-center lg:self-start w-full lg:max-w-[352px] h-[208px] px-4 py-6 gap-5 bg-gradient_dark border-r-2 border-b-2 border-r-custom_primary-dark border-b-custom_primary"
                  variants={scrollVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <p className="font_body_two text-custom_white-light">
                    <strong className="text-custom_primary mr-1">Age:</strong>
                    {age}
                  </p>
                  <p className="font_body_two text-custom_white-light">
                    <strong className="text-custom_primary mr-1">Role:</strong>
                    Frontend Engineer
                  </p>
                  <p className="font_body_two text-custom_white-light">
                    <strong className="text-custom_primary mr-1">
                      Residence:
                    </strong>
                    Brazil
                  </p>
                  <p className="font_body_two text-custom_white-light">
                    <strong className="text-custom_primary mr-1">
                      Location:
                    </strong>
                    Santos, São Paulo
                  </p>
                </MotionDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
