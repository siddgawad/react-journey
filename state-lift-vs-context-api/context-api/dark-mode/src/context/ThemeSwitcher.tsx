import { useTheme } from "./useTheme";

export const ThemeSwitcher=()=>{
    const {toggleTheme,theme} = useTheme();
    const backgroundColor = theme === "light"?"white":"black";
    const textColor = theme === "light"?"black":"white";

    return(
        <div style={{backgroundColor,width:"100%",minHeight:"100vh",
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
        }}>
            
                <button onClick={toggleTheme}
                style={{backgroundColor,color:textColor,display:"flex",
                    padding:"40px",border:"none"
                }}
                >Toggle</button>
            
        </div>
    )
}