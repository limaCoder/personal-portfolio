import * as servicesAnimation from "@/app/assets/lottie/services-lottie.json";

export const servicesAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: servicesAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
