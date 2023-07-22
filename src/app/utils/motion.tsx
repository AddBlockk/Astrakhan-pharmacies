export const headerVariants = {
  hidden: {
    opacity: 0,
    y: -80,
    transition: {
      duration: 1,
      type: "spring",
      damping: 10,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      stiffnes: 80,
      type: "spring",
      damping: 10,
    },
  },
};

export const informationText = {
  hidden: {
    opacity: 0,
    x: -850,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      stiffnes: 80,
      type: "spring",
    },
  },
};

export const informationImg = {
  hidden: {
    opacity: 0,
    x: 900,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      stiffnes: 80,
      type: "spring",
    },
  },
};

export const arrow = {
  hidden: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      stiffnes: 80,
      type: "spring",
    },
  },
};

export const aboutTitle = {
  hidden: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 1.5,
      type: "spring",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      stiffnes: 80,
      type: "spring",
    },
  },
};
