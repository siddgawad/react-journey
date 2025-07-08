import { createContext } from "react";

type themeProps={
    theme: "light"|"dark";
    toggleTheme:()=>void;
}

export const themeContext = createContext<themeProps | null>(null);
