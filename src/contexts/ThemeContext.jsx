import React, { createContext, useState } from "react";

export const DarkThemeContext = createContext();

const ThemeContext = ({ children }) => {
   const [dark, setDarkTheme] = useState(false);
   const themeInfo = { setDarkTheme, dark };

   return <DarkThemeContext.Provider value={themeInfo}>{children}</DarkThemeContext.Provider>;
};

export default ThemeContext;
