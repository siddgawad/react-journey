

import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/*
AuthProvider is a component you use to wrap your entire app
Inside, it stores the real user state using useState
When login is called, it stores the username
When logout is called, it resets the state to null
AuthContext.Provider is how we pass the values down
{children} is what you wrap inside <AuthProvider>...</AuthProvider>


*/