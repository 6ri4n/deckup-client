import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ isSignedIn: false });

  const login = (userData) => {
    setUser((prev) => ({ ...prev, ...userData, isSignedIn: true }));
  };

  const logout = () => {
    setUser({ isSignedIn: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
