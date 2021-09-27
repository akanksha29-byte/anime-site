import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentAnime, setCurrentAnime] = useState();

  const value = {
    setCurrentAnime,
    currentAnime,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
