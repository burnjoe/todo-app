import { Todo } from "./App";
import DeleteButton from "./DeleteButton";

type TodoListProps = {
  // Reuse the exported Todo from App.tsx
  todos: Todo[];
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export default function TodoList({
  todos,
  handleToggleTodo,
  handleDeleteTodo,
}: TodoListProps) {
  return (
    <ul>
      {/* Short-circuiting 'condition && expression', if condition is true return expression */}
      {/* Short-circuiting: 'operand1 && operand2', if operand1 is false, operand2 will not be evaluated*/}
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center text-[#ccc]">
          No todos for now
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
