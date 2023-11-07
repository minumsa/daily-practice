const defaultColor = {
  light: "#fff",
  dark: "#1e1e1e",
};

const invertedColor = {
  light: "#1e1e1e",
  dark: "#aaa",
  // dark: "#f4f4f4",
};

const backgroundColor = {
  light: "#f4f4f4",
  dark: "#1e1e1e",
};

export const lightTheme = {
  backgroundColor: backgroundColor.light,
  defaultColor: defaultColor.light,
  invertedColor: invertedColor.light,
};

export const darkTheme = {
  backgroundColor: backgroundColor.dark,
  defaultColor: defaultColor.dark,
  invertedColor: invertedColor.dark,
};

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
