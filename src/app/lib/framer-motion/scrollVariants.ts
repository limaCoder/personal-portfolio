export const scrollVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};
