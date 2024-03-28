import Image from "next/image";
import { FiInfo } from "react-icons/fi";

import { carouselImages } from "./carouselImages";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { scrollTransition } from "@/app/lib/framer-motion/server/scrollTransition";
import {
  MotionDiv,
  MotionHeadlineTwo,
  MotionParagraph,
} from "@/app/lib/framer-motion/MotionComponents";

export async function AboutSection() {
  return (
    <section id="about" className="h-screen w-full relative pb-16">
      <div className="w-full h-screen p-0 absolute top-0 left-0 -z-10 overflow-hidden border-t-2 border-t-custom_primary">
        <div className="w-full h-full flex flex-row justify-start items-start animate-carousel_images">
          {carouselImages.map((carouselImage) => (
            <Image
              className="border-r-2 max-w-[590px] h-[1080px] border-r-custom_primary"
              key={carouselImage.id}
              src={carouselImage.src}
              alt={carouselImage.alt}
              width={carouselImage.width}
              height={carouselImage.height}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient_secondary opacity-90"></div>
      <div className="z-20 container flex flex-col justify-end items-center relative h-full">
        <div className="flex flex-col justify-center gap-10">
          <MotionHeadlineTwo
            className="font-headline_one text-custom_white-light"
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            transition={await scrollTransition(1)}
            viewport={{ once: false }}
          >
            About me
          </MotionHeadlineTwo>
          <div className="flex flex-row gap-14">
            <div className="flex flex-col max-w-[425px]">
              <MotionParagraph
                className="mb-6 text-custom_white-dark font-body_two"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={await scrollTransition(2)}
                viewport={{ once: false }}
              >
                I am a passionate Frontend Developer with a self-taught journey
                and a career-focused vision with +3 years of experience,
                specializing in creating elegant web interfaces and interactive
                experiences. I started my career in 2020, when I dove deep into
                the world of web and mobile development, with cutting-edge
                technologies like ReactJS, React Native, Next.js, and
                TypeScript.
              </MotionParagraph>
              <MotionParagraph
                className="mb-6 text-custom_white-dark font-body_two"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={await scrollTransition(3)}
                viewport={{ once: false }}
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
                transition={await scrollTransition(4)}
                viewport={{ once: false }}
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
                transition={await scrollTransition(5)}
                viewport={{ once: false }}
              >
                <div className="flex flex-row gap-4">
                  <FiInfo size={24} className="text-custom_primary-light" />
                  <p className="font-body_two text-custom_white-light max-w-[312px]">
                    Freelancer, Developer and UI/UX Design enthusiast.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <FiInfo size={24} className="text-custom_primary-light" />
                  <p className="font-body_two text-custom_white-light max-w-[312px]">
                    Experienced in major companies like Azul, Hapvida, and
                    Mutant.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <FiInfo size={24} className="text-custom_primary-light" />
                  <p className="font-body_two text-custom_white-light max-w-[312px]">
                    Lifelong learner, constantly pushing the boundaries of
                    technology
                  </p>
                </div>
              </MotionDiv>
              <MotionDiv
                className="flex flex-col max-w-[352px] h-[208px] px-4 py-6 gap-5 bg-gradient_dark border-r-2 border-b-2 border-r-custom_primary-dark border-b-custom_primary"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={await scrollTransition(6)}
                viewport={{ once: false }}
              >
                <p className="font_body_two text-custom_white-light">
                  <strong className="text-custom_primary mr-1">Age:</strong>22
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
    </section>
  );
}
