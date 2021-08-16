import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  Children,
} from "react";

export const AuthContext = createContext();

export const useAuthcontext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [logIn, setlogIn] = useState(false);
  const [logOut, setlogOut] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const auths = {
    login: {
      logIn, setlogIn
    },
    logout: {
      logOut, setlogOut
    },
    isAuth: {
      isAuthenticate, setIsAuthenticate
    }
  };

  return (
    <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>
  );
};
