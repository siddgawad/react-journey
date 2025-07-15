import { TagContext } from "./TagContext";
import { useContext } from "react";

export const useTag = ()=>{
    const context = useContext(TagContext);
    if(!context){
        throw new Error("Can only use values within provider"); 
    }
    return context;
}