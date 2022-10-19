import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import userEvent from "@testing-library/user-event";

const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
   const [user, setUser] = useState(null);

   const authInfo = {};
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
