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
    <form  onSubmit={(e)=>{e.preventDefault();
        handleSubmit();
    }}
    className="flex gap-2 w-full max-w-md">
   <input value={input} placeholder="Enter Todo Title" 
   onChange={(e)=>setInput(e.target.value)} autoFocus
   className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500"
   />     
   <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Add</button>

    </form>
)

}
