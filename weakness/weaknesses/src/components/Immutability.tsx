import type { Todo } from "../../types";
import { useState } from "react";

type Props = {
  todos: Todo[];
  markAsDone: (id: number) => void;
  addTodo: (task: string) => void;
};

export const Immutability = ({ todos, addTodo, markAsDone }: Props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button
        onClick={() => {
          addTodo(input);
          setInput("");
        }}
      >
        Submit
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => markAsDone(todo.id)}>
            {todo.task} {todo.isDone ? "done" : "pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};
