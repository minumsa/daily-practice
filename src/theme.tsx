const textColor = {
  // light: "#1e1e1e",
  light: "#2a2a2a",
  dark: "#bfbfbf",
  // dark: "#aaa",
  // dark: "#f4f4f4",
};

const invertedColor = {
  // light: "#fff",
  light: "#dcdcdc",
  dark: "#1e1e1e",
  // dark: "#2a2a2a",
};

const backgroundColor = {
  // light: "#f4f4f4",
  light: "#dcdcdc",
  dark: "#1e1e1e",
  // dark: "#2a2a2a",
};

export const lightTheme = {
  backgroundColor: backgroundColor.light,
  invertedColor: invertedColor.light,
  textColor: textColor.light,
};

export const darkTheme = {
  backgroundColor: backgroundColor.dark,
  invertedColor: invertedColor.dark,
  textColor: textColor.dark,
};

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
