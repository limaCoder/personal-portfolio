import { AuroraBackground } from "./components/ui/aurora-background";
import { MotionDiv } from "./lib/framer-motion/MotionComponents";

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
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Page or resource not found
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          404
        </div>
      </MotionDiv>
    </AuroraBackground>
  );
}
