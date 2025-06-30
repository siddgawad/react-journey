import type { Todo } from "../../type";
import React,{useState} from "react";

type Props={
    todos:Todo[];
    markAsDone:(id:number)=>void; inputState:boolean; setInputState: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit:(task:string)=>void; markAllDone:()=>void;
}

export const Immutability = ({todos,markAsDone,inputState,setInputState,handleSubmit,markAllDone}:Props)=>{
    const [inputValue,setInputValue] = useState("");
    return(
        <div>
            <button onClick={()=>setInputState(true)}>Add Todo</button>
            {inputState?(<>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>handleSubmit(inputValue)}>Submit</button>

            <div>
                <ul>
                {todos.map((t)=>(<>
                <li key={t.id}>{t.task} - {t.isDone?"done task":"pending"}
                    <button onClick={()=>markAsDone(t.id)}>Mark As Done</button></li>
                

                </>))}
               <button onClick={()=>markAllDone()}>Mark All As Done</button>
                </ul>

               
            </div>
            </>):(<></>)}
        </div>
    )
}