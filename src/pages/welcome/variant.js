const welcomeVariant = {
  hidden: {
    x: "20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      type: "tween",
      duration: 1.5,
    },
  },
};
export default welcomeVariant;