"use server";

const scrollTransition = async (custom: number) => {
  return {
    delay: custom * 0.2,
    duration: 0.6,
  };
};

export { scrollTransition };
