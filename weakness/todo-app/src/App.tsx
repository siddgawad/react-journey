import {useState} from "react";
import type {Todo} from "../type.ts";
import { Immutability } from "./components/Immutability.tsx";

export default function App(){
  const [todos,setTodos] = useState<Todo[]>([]);
  const[inputState,setInputState] = useState(false);


  function handleSubmit(task:string){
setTodos([...todos,{id:Date.now(),task:task,isDone:false}]);

  }

  function markAsDone(id:number){
    const updateTodo = todos.map((todo)=>todo.id===id?{...todo,isDone:true}:todo)
    setTodos(updateTodo)
  }

  function markAllDone(){
    setTodos(todos.map(todo=>({...todo,isDone:true})));
  }

  return(
    <div>
      <Immutability todos={todos} markAsDone={markAsDone} markAllDone={markAllDone}
      inputState={inputState} setInputState={setInputState} handleSubmit={handleSubmit}
      
      />
    </div>
  )
}

