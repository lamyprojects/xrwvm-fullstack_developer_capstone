import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (user: User & { password: string }) => boolean;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const getUsers = (): Record<string, User & { password: string }> => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : {};
  };

  const register = (data: User & { password: string }) => {
    const users = getUsers();
    if (users[data.username]) return false;
    users[data.username] = data;
    localStorage.setItem("users", JSON.stringify(users));
    const { password, ...userData } = data;
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
    return true;
  };

  const login = (username: string, password: string) => {
    const users = getUsers();
    const found = users[username];
    if (found && found.password === password) {
      const { password: _, ...userData } = found;
      setUser(userData);
      localStorage.setItem("currentUser", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
