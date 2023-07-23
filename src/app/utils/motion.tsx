export const headerVariants = {
  hidden: {
    opacity: 0,
    y: -80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const informationText = {
  hidden: {
    opacity: 0,
    x: "-50%",
  },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const informationImage = {
  hidden: {
    opacity: 0,
    x: "50%",
  },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const arrow = {
  hidden: {
    opacity: 0,
    y: -40,
    transition: {
      type: "spring",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
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
      // stiffnes: 80,
      type: "spring",
    },
  },
};
