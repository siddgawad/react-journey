import React from "react";
import type { Todo } from "../types";

type Props = {
    todos: Todo[]
    handleSubmit:()=>void;
    toggleTodo:(id:number)=>void;
    currentTodo:string,
    setCurrentTodo: React.Dispatch<React.SetStateAction<string>>;
  

}

export const TodoApp = ({todos,handleSubmit,toggleTodo,currentTodo,setCurrentTodo}:Props)=>{




    return(
        <div>
            <div><h1>Todo App</h1></div>
            <div>
                <input value={currentTodo} placeholder=";-enter task to do" onChange={(e)=>setCurrentTodo(e.target.value)} />
                <button onClick={()=>handleSubmit()}>Submit</button>
            </div>
            <div>
                {todos.map(todo=>(
                    <div>
                        <ul>
                           <li key={todo.id}>{todo.task} - {todo.isDone?"done":"not done"} </li>
                           <li><button onClick={()=>toggleTodo(todo.id)}>Toggle Status</button></li> 
                        </ul>
                        </div>
                ))}
            </div>
        </div>
    )
}