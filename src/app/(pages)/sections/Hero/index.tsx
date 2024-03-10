"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { WavyBackground } from "@/app/components/ui/wavy-background";

export function HeroSection() {
  return (
    <section className="h-screen w-full bg-gradient_dark relative pt-28">
      <div className="container h-full flex lg:flex-row justify-around items-center z-20 relative">
        <div className="max-w-[372px]">
          <p className="font-body_one text-custom_white-dark">
            Hi, there!
            <strong className="text-custom_white-light ml-1">
              I’m Mario Lima
            </strong>
          </p>
          <h1 className="font-headline_one text-custom_secondary-light mt-2 mb-6">
            Front-end Developer
          </h1>
          <p className="font-body_one text-custom_white-dark">
            My journey is crafting digital experiences that captivate and engage
            both you and your audience.
          </p>
          <div className="flex flex-row gap-7 mt-8 items-center">
            <button className="hover:brightness-150 transition inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Contact me
            </button>
            <div className="flex flex-row gap-4">
              <button>
                <FaGithub
                  size={24}
                  className="text-custom_secondary-dark hover:brightness-150 transition"
                />
              </button>
              <button>
                <FaLinkedin
                  size={24}
                  className="text-custom_secondary-dark hover:brightness-150 transition"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/pages/home/hero/avatar-image.png"
            alt="Representation of Mario Lima in avatar"
            width={521}
            height={677}
          />
        </div>
      </div>
      <WavyBackground />
    </section>
  );
}
