import { ThemeContext } from "./ThemeContext";
import { useState } from "react";


export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
const [theme,setTheme] = useState<"light"|"dark">("light");

function toggleTheme(){
    setTheme((prev)=>(prev==="light"?"dark":"light"))
}
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}