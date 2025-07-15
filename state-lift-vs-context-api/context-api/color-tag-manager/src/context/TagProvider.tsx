import { TagContext } from "./TagContext";
import { useState } from "react";

export const TagProvider = ({children}:{children:React.ReactNode})=>{
    const [tag,setTag]  = useState<string|null>(null);
    const tagFnctn = (newTag:string)=>{
        setTag(newTag);
    }

    return(
        <TagContext.Provider value={{tag,tagFnctn}}>
            {children}
        </TagContext.Provider>
    )
}