import { useEffect,useState } from "react";
import { TodoForm } from "../src/components/TodoForm"
import { TodoList } from "../src/components/TodoList"
import type { Todo } from "../types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {  
    try {
      const saved = localStorage.getItem("todos");
      if (saved) {
        const parsed = JSON.parse(saved) as Todo[];
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (err) {
      console.error("Invalid JSON in localStorage", err);
    }
    return [];
  });


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const addTodo = (task: string) =>
    setTodos((prev) => [...prev, { id: Date.now(), task, isDone: false }]);

  const toggleTodo = (id: number) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );

    const onDelete = (id:number)=>{
      const updatedTodos = todos.filter((todo)=>todo.id!==id);
      setTodos(updatedTodos);
    }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={onDelete}/>
    </main>
  );
}
