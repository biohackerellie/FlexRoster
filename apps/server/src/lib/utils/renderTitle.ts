import gradient from "gradient-string";

import { TITLE_TEXT } from "~/cli/constants";

const colorTheme = {
  blue: "#A9DDD6",
  cyan: "#33E8EC",
  green: "#DAFBAC",
  magenta: "#D193E4",
  red: "#CC6B73",
  yellow: "#BCC199",
};

export const renderTitle = () => {
  const logoGradient = gradient(Object.values(colorTheme));

  console.log("");
  console.log(logoGradient.multiline(TITLE_TEXT));
};
