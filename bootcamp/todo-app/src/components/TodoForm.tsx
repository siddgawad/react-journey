import {useState} from "react";

interface Props{
    onSubmit:(task:string)=>void;
}

export const TodoForm=({onSubmit}:Props)=>{
    const [input,setInput] = useState("");

    const handleSubmit=()=>{
        if(!input.trim()) return;
        onSubmit(input.trim());
        setInput("");
    };

return(
    <form onSubmit={(e)=>{e.preventDefault();
        handleSubmit();
    }}
    className="flex gap-2">
   <input value={input} placeholder="Enter Todo Title" 
   onChange={(e)=>setInput(e.target.value)} autoFocus
   />     
   <button type="submit">Add</button>

    </form>
)

}
