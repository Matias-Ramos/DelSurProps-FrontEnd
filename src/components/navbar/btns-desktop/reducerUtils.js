// Icons
import orangeDot from "../../../assets/icons/orange-circle.svg";
import turquoiseDot from "../../../assets/icons/turquoise-circle.svg";
import blueDot from "../../../assets/icons/blue-circle.svg";
import greyDot from "../../../assets/icons/grey-circle.svg";

const defaultDotStatuses = {
  orangeStatus: greyDot,
  turquoiseStatus: greyDot,
  blueStatus: greyDot,
  activeStatus: null,
};
function manageHover(colorStatuses, action) {
  const updateColorStatus = (key, dot) => ({
    ...colorStatuses,
    [key]: action.focused ? dot : greyDot,
  });

  switch (action.type) {
    case "orangeChgd":
      return colorStatuses.orangeStatus === colorStatuses.activeStatus
        ? colorStatuses
        : updateColorStatus("orangeStatus", orangeDot);

    case "blueChgd":
      return colorStatuses.blueStatus === colorStatuses.activeStatus
        ? colorStatuses
        : updateColorStatus("blueStatus", blueDot);

    case "turquoiseChgd":
      return colorStatuses.turquoiseStatus === colorStatuses.activeStatus
        ? colorStatuses
        : updateColorStatus("turquoiseStatus", turquoiseDot);

    default:
      console.error(
        "error on NavBtns.jsx > manageHover fn > switch statement, when hovering over one of the navBar btns"
      );
      return colorStatuses;
  }
}
function manageClick(action) {
  const updateColorStatus = (dot, color) => ({
    ...defaultDotStatuses,
    activeStatus: dot,
    [`${color}Status`]: dot,
  });
  switch (action.type) {
    case "orangeChgd":
      return updateColorStatus(orangeDot, "orange");
    case "blueChgd":
      return updateColorStatus(blueDot, "blue");
    case "turquoiseChgd":
      return updateColorStatus(turquoiseDot, "turquoise");
    default:
      console.error(
        "error on NavBtns.jsx > manageClick fn > switch statement, when clicking one of the navBar btns"
      );
      return defaultDotStatuses;
  }
}
function colorModifier(colorStatuses, action) {
  if (action.hover) return manageHover(colorStatuses, action);
  else return manageClick(action);
}

export { colorModifier, defaultDotStatuses };
