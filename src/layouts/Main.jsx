import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { DarkThemeContext } from "../contexts/ThemeContext";

const Main = () => {
   const { dark } = useContext(DarkThemeContext);
   console.log(dark);
   return (
      <div data-theme={dark ? "night" : "garden"}>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Main;
