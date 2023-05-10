const colors = {
  borderColor: {
    defect: "#ccc5b9",
    hover: "#8a817c",
  },
  backgroundColor: {
    orange: {
      contained: {
        defect: "#f9e5c7",
        hover: "#ffd29d",
      },
      outlined: {
        defect: "#f8f9fa",
        hover: "#f9e5c7",
      },
    },
    blue: {
      contained: {
        defect: "#bfdbf7",
        hover: "#74c0fc",
      },
      outlined: {
        defect: "#f8f9fa",
        hover: "#e1e5f2",
      },
    },
    turquoise: {
      contained: {
        defect: "#d0edeb",
        hover: "#90e0df",
      },
      outlined: {
        defect: "#f8f9fa",
        hover: "#eaf7f6",
      },
    },
  },
};
const customTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        /******************************* */
        /******************************* */

        root: {
          borderColor: colors.borderColor.defect,
          "&:hover": {
            borderColor: colors.borderColor.hover,
          },
        },

        /******************************* */
        /******************************* */

        containedOrange: {
          backgroundColor: colors.backgroundColor.orange.contained.defect,
          "&:hover": {
            backgroundColor: colors.backgroundColor.orange.contained.hover,
          },
        },
        outlinedOrange: {
          backgroundColor: colors.backgroundColor.orange.outlined.defect,
          "&:hover": {
            backgroundColor: colors.backgroundColor.orange.outlined.hover,
          },
          textTransform: "none",
        },

        /******************************* */
        /******************************* */

        containedBlue: {
          backgroundColor: colors.backgroundColor.blue.contained.defect,
          "&:hover": {
            backgroundColor: colors.backgroundColor.blue.contained.hover,
          },
        },
        outlinedBlue: {
          backgroundColor: colors.backgroundColor.blue.outlined.defect,
          "&:hover": {
            backgroundColor: colors.backgroundColor.blue.outlined.hover,
          },
          textTransform: "none",
        },

        /******************************* */
        /******************************* */

        containedTurquoise: {
          backgroundColor: colors.backgroundColor.turquoise.contained.defect,
          "&:hover": {
            backgroundColor: colors.backgroundColor.turquoise.contained.hover,
          },
        },
        outlinedTurquoise: {
          backgroundColor: colors.backgroundColor.turquoise.outlined.defect,
          "&:hover": {
            backgroundColor: colors.backgroundColor.turquoise.outlined.hover,
          },
          textTransform: "none",
        },
      },
    },
  },
};

export default customTheme;
