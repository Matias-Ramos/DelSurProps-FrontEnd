const getFiltersVariant = (isDesktop, isFirstRender) => {
  const filterVariant =
    isDesktop && isFirstRender
      ? {
          initial: {
            opacity: 0,
            y: 40,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.5,
              delayChildren: 0.5,
              staggerChildren: 0.3,
              duration: 1.1,
            },
          },
        }
      : {
          initial: false,
          animate: false,
        };
  return filterVariant;
};
export default getFiltersVariant;
