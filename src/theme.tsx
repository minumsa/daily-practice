const defaultColor = {
  light: "#1e1e1e",
  dark: "#bdc1c6",
  // dark: "#aaa",
  // dark: "#f4f4f4",
};

const invertedColor = {
  light: "#fff",
  dark: "#1e1e1e",
};

const backgroundColor = {
  light: "#f4f4f4",
  dark: "#1e1e1e",
};

export const lightTheme = {
  backgroundColor: backgroundColor.light,
  invertedColor: invertedColor.light,
  defaultColor: defaultColor.light,
};

export const darkTheme = {
  backgroundColor: backgroundColor.dark,
  invertedColor: invertedColor.dark,
  defaultColor: defaultColor.dark,
};

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
