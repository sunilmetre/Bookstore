import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const themeClass = localStorage.getItem("theme");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  useEffect(() => {
    if (themeClass) {
      document.body.classList.add(themeClass);

      return () => {
        document.body.classList.remove(themeClass);
      };
    }
  }, [themeClass]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
