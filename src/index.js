import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ThemeContext>
         <UserContext>
            <App />
         </UserContext>
      </ThemeContext>
   </React.StrictMode>
);

reportWebVitals();
