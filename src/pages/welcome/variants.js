const welcomeVariant = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      type: "tween",
      duration: 1.5,
    },
  },
};

const brandVariant = {
  hidden: {
    opacity:0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
    }
  }
}
export {brandVariant, welcomeVariant}