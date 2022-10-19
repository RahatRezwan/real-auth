import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { DarkThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/UserContext";

const Main = () => {
   const { dark } = useContext(DarkThemeContext);
   const { loading } = useContext(AuthContext);
   if (loading) {
      return <div>loading</div>;
   }
   return (
      <div data-theme={dark ? "night" : "garden"}>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Main;
