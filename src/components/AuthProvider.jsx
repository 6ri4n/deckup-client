import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const storedUser = getCookie("user");

  const [user, setUser] = useState(
    storedUser ? JSON.parse(storedUser) : { isSignedIn: false }
  );

  useEffect(() => {
    setCookie("user", JSON.stringify(user));
  }, [user]);

  const login = (userData) => {
    setUser((prev) => ({ ...prev, ...userData, isSignedIn: true }));
  };

  const logout = () => {
    deleteCookie("user");
    setUser({ isSignedIn: false });
  };

  function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }

    return null;
  }

  function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; SameSite=Strict;`;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
