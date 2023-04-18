const customTheme = {
  components: {
    MuiButton: {
      styleOverrides: {

        /******************************* */
        /******************************* */

        root: {
          borderColor: "#ccc5b9", // default border color
          "&:hover": {
            borderColor: "#8a817c", // border color on hover
          },
        },

        /******************************* */
        /******************************* */

        contained: {
        //   color: "#000",
          backgroundColor: "#f9e5c7", // background color for contained Alquilar button
          "&:hover": {
            backgroundColor: "#ffd29d", // background color on hover for contained Alquilar button
          },
        },
        outlined: {
        //   color: "#000",
        //   backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#f9e5c7", // background color on hover for outlined Alquilar button
          },
        },

        /******************************* */
        /******************************* */

        containedSecondary: {
        //   color: "#000",
          backgroundColor: "#bfdbf7", // background color for contained Comprar button
          "&:hover": {
            backgroundColor: "#74c0fc", // background color on hover for contained Comprar button
          },
        },
        outlinedSecondary: {
        //   color: "#000",
        //   backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#e1e5f2", // background color on hover for outlined Comprar button
          },
        },

        /******************************* */
        /******************************* */

        containedTertiary: {
        //   color: "#000",
          backgroundColor: "#d0edeb", // background color for contained Emprendimientos button
          "&:hover": {
            backgroundColor: "#90e0df", // background color on hover for contained Emprendimientos button
          },
        },
        outlinedTertiary: {
        //   color: "#000",
        //   backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#eaf7f6", // background color on hover for outlined Emprendimientos button
          },
        },
      },
    },
  },
};

export default customTheme;