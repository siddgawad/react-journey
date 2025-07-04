
import type {Todo} from "../../types";

interface Props {
    todo: Todo
    onToggle:(id:number)=>void
    onDelete:(id:number)=>void;
}

export const TodoItem = ({todo,onToggle,onDelete}:Props)=>{
    
    return(
        <div>
       <li className="flex justify-between items-center bg-white shadow-sm rounded-lg px-4 py-2 m-4 w-full max-w-md">

       <span className={`flex-1 ${todo.isDone ? "line-through text-gray-400" : "text-gray-900"}`}>
                {todo.task}
            </span>
            <button onClick={()=>onToggle(todo.id)} className="text-sm text-green-600 hover:underline mr-8">
                {todo.isDone? "Undo":"Done" }
            </button>
            <button onClick={()=>onDelete(todo.id)

            }>Delete</button>
         </li>
        </div>
    )
}

