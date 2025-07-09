import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme=()=>{
    const context = useContext(ThemeContext);
    if(context===null){
        throw new Error("Cannot use values outside ThemeProvider")
    }
    return context;
}