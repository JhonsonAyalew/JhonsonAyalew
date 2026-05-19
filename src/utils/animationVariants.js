export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
  exit: {
    opacity: 0, scale: 0.92, y: 10,
    transition: { duration: 0.2 },
  },
};

export const scaleOut = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.25 } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.25 } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, x: 30, transition: { duration: 0.25 } },
};

export const pageTransition = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0, scale: 0.97,
    transition: { duration: 0.25 },
  },
};

export const glowPulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};
