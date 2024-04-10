import { FiGithub, FiLinkedin } from "react-icons/fi";

import { ContactForm } from "./components/ContactForm";

import { Spotlight } from "@/app/components/ui/Spotlight";
import { Button } from "@/app/components/ui/button";

import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import {
  MotionDiv,
  MotionHeadlineThree,
  MotionHeadlineTwo,
} from "@/app/lib/framer-motion/MotionComponents";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[75vh] xl:min-h-[40vh] w-full relative py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="container min-h-[75vh] xl:min-h-[40vh]">
        <div className="min-h-[75vh] xl:min-h-[40vh] flex flex-col-reverse lg:flex-row gap-12 lg:gap-0 justify-around">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-8">
            <div className="flex flex-col gap-12">
              <MotionHeadlineThree
                className="font-headline_two text-custom_white-light text-center lg:text-start"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
              >
                Say Hello!
              </MotionHeadlineThree>
              <MotionDiv
                className="max-w-[384px]"
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
              >
                <p className="font_body-two text-custom_white-dark">
                  If you have any inquiries or simply want to reach out, feel
                  free to fill out the form or get in touch via social media
                  below.
                </p>
                <p className="font_body-two text-custom_white-dark mt-4">
                  I&apos;m enthusiastic about building connections, exchanging
                  insights, and exploring potential collaborations. Don&apos;t
                  hesitate to reach out, let&apos;s start a conversation!
                </p>
              </MotionDiv>
            </div>
            <MotionDiv
              className="flex flex-col gap-8 max-w-[292px]"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <Button
                className="rounded-[27px] border-custom_secondary hover:brightness-[0.8] transition"
                variant="outline"
              >
                <a
                  className="flex flex-row"
                  href="https://www.linkedin.com/in/marioaulima/"
                >
                  <FiLinkedin
                    size={24}
                    className="text-custom_secondary-dark mr-4"
                  />
                  <span className="font-headline_five text-custom_white">
                    Chat with me in Linkedin
                  </span>
                </a>
              </Button>
              <Button
                className="rounded-[27px] border-custom_secondary hover:brightness-[0.8] transition"
                variant="outline"
              >
                <a
                  className="flex flex-row"
                  href="https://github.com/limaCoder"
                >
                  <FiGithub
                    size={24}
                    className="text-custom_secondary-dark mr-4"
                  />
                  <span className="font-headline_five text-custom_white">
                    Check my Github
                  </span>
                </a>
              </Button>
            </MotionDiv>
          </div>
          <div className="flex flex-col gap-12">
            <MotionHeadlineTwo
              className="font-headline_two text-custom_secondary-light text-center lg:text-start"
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              Get in touch
            </MotionHeadlineTwo>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
