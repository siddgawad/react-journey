import { useState } from "react";
import { useTag } from "../context/useTag";

export const TagManager = ()=>{
    const {tag,tagFnctn} = useTag();
    const [input, setInput] = useState("");
    return(
        <div>
            {tag?(<>   <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => tagFnctn(input)}>Submit</button>
       </>):("Could not find tag")}
            
        </div>
    )
}