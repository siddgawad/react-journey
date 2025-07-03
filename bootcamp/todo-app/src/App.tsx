import React, { useState } from "react";
import { TodoForm } from "../src/components/TodoForm"
import { TodoList } from "../src/components/TodoList"
import type { Todo } from "../types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) =>
    setTodos((prev) => [...prev, { id: Date.now(), task, isDone: false }]);

  const toggleTodo = (id: number) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );

  return (
    <main className="p-4 space-y-4">
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </main>
  );
}
