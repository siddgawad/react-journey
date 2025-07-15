
import { useState } from "react";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children}:{children:React.ReactNode})=>{
const [username,setUsername] = useState<string|null>(null);
const login = (name:string)=>setUsername(name);
const logout = ()=>setUsername(null);

return(
    <AuthContext.Provider value = {{login,logout,username}}>
        {children}
    </AuthContext.Provider>
)

}