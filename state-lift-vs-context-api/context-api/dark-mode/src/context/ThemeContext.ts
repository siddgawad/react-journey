import { createContext } from "react";

type ThemeContextProps = {
    theme:"light"|"dark";
    toggleTheme:()=>void;
}

export const ThemeContext = createContext<ThemeContextProps|null>(null);

