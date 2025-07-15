import { createContext } from "react";

type AuthProps = {
    username:string|null;
    login:(name:string)=>void;
    logout:()=>void;
}

export const AuthContext = createContext<AuthProps|null>(null);

