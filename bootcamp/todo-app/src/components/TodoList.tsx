import type {Todo} from "../../types";
import { TodoItem } from "./TodoItem";

interface Props{
    todos:Todo[];
    onToggle:(id:number)=>void;
}

export const TodoList = ({todos,onToggle}:Props)=>{
    return(
        <ul>
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    )
}


