import { AuthContext } from "./AuthContext";
import { useState } from "react";

export const AuthProvider = ({children}:{children:React.ReactNode})=>{
    const [username,setUsername] = useState(()=>{
        const saved = localStorage.getItem("username");
        return saved? JSON.parse(saved) : null;
    })

  

    const login = (name:string)=>setUsername(name);
    const logout = ()=>setUsername(null);

    return(
        <AuthContext.Provider value={{login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )

}