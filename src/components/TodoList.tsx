import DeleteButton from "./DeleteButton";

const initialTodos = [
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
    text: "draft a plan for the startup business",
    isCompleted: false,
  },
];

export default function TodoList() {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}
