import Link from "next/link";

import { AuroraBackground } from "../components/ui/aurora-background";
import { MotionDiv } from "../lib/framer-motion/MotionComponents";

export default function NotFound() {
  return (
    <AuroraBackground>
      <MotionDiv
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-custom_primary text-center">
          Page or resource not found
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          404
        </div>
        <Link
          className="bg-white rounded-lg w-fit text-black px-4 py-2"
          href="/"
        >
          Back to homepage
        </Link>
      </MotionDiv>
    </AuroraBackground>
  );
}
