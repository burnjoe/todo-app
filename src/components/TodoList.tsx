import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "finish springboot project",
      isCompleted: false,
    },
    {
      id: 2,
      text: "study react with typescript",
      isCompleted: false,
    },
    {
      id: 3,
      text: "draft a plan for the startup",
      isCompleted: false,
    },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                }
                return t;
              })
            );
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}
