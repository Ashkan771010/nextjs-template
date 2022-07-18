export const bottomSheetVariants = {
  inital: {
    y: "100%",
    opacity: 0.5,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  exit: {
    y: "100%",
    opacity: 0.5,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const bluredVariants = {
  inital: {
    opacity: 0,
    backdropFilter: "blur(0)",
    background: "rgba(0, 0, 0, 0)",
  },
  animate: {
    opacity: 1,
    backdropFilter: "blur(2.8px)",
    background: "rgba(0, 0, 0, 0.07)",
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0)",
    background: "rgba(0, 0, 0, 0)",
  },
};
