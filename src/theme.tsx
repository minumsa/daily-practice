const bgColor = {
  light: "#f4f4f4",
  dark: "#1e1e1e",
};

const categoryColor = {
  light: "#fff",
  dark: "#1e1e1e",
};

const opacity = {
  light: 0.92,
  dark: 0.86,
};

const listBgColor = {
  light: "#252525",
  dark: "#fff",
};

const textColor = {
  light: "#000000",
  dark: "#fff",
};

const hamburgerColor = {
  light: "rgb(244, 244, 244)",
  dark: "rgb(30, 30, 30)",
};

export const lightTheme = {
  bgColor: bgColor.light,
  categoryColor: categoryColor.light,
  textColor: textColor.light,
  opacity: opacity.light,
  listBgColor: listBgColor.light,
  hamburgerColor: hamburgerColor.light,
};

export const darkTheme = {
  bgColor: bgColor.dark,
  categoryColor: categoryColor.dark,
  textColor: textColor.dark,
  opacity: opacity.dark,
  listBgColor: listBgColor.dark,
  hamburgerColor: hamburgerColor.dark,
};

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
