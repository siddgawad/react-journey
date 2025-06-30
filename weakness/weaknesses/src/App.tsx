import { useState } from "react";
import { Immutability } from "./components/Immutability";
import type { Todo } from "../types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showSetInput, setShowSetInput] = useState(false);

  function handleCreate() {
    setShowSetInput(true);
  }

  function markAsDone(id: number) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, isDone: true }
          : todo
      )
    );
  }

  function addTodo(task: string) {
    if (!task.trim()) return;
    setTodos(prev => [
      ...prev,
      { id: Date.now(), task, isDone: false }
    ]);
  }

  return (
    <div>
      <button onClick={handleCreate}>Create Todo</button>
      {showSetInput && (
        <Immutability
          addTodo={addTodo}
          markAsDone={markAsDone}
          todos={todos}
        />
      )}
    </div>
  );
}
