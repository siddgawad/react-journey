import { createContext } from "react";

/*
Think of createContext() as building a global vault in your app.
Once the vault is created, you can:
Put values into it using .Provider
Take values out using useContext()
You then wrap your app in this provider, and any component inside can access the vault.
We will store:
user: string or null
login(username)
logout()
These will be globally available using useAuth().
*/


type AuthContextType = {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null); //this creates a new shared space (context box) that will hold the props like user,login and logout function

/*
createContext<AuthContextType | null> tells TypeScript:
This will store either the full context data
Or null if the provider isn’t set
Initial value is null because no one is logged in yet
*/
