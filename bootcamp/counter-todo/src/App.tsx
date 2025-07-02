import {useState} from "react";
import { Counter } from "./components/Counter";
import { TodoApp } from "./components/TodoApp";
import type { Todo } from "./types";


export default function App(){
  const [count,setCount] = useState(0);
  const [todos,setTodos] = useState<Todo[]>([]);
  const [currentTodo,setCurrentTodo] = useState("");

function increaseCount(){
  setCount(count+1);
}

function decreaseCount(){
  setCount(count-1);
}

function handleSubmit(){
setTodos(todo=>[...todo,{id:Date.now(),task:currentTodo,isDone:false}])
setCurrentTodo("");
}

function toggleTodo(id:number){
  setTodos(todo=>todo.map(t=>(t.id===id?{...t,isDone:!t.isDone}:t)))
}


  return(
    <div>
      <div>
      <Counter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />
      </div>
      <hr />
      <div>
        <TodoApp todos={todos} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} handleSubmit={handleSubmit} toggleTodo={toggleTodo}/>
      </div>
    </div>
    
  )
}