import { Todo } from "./App";

type CounterProps = {
  todos: Todo[];
};

export default function Counter({ todos }: CounterProps) {
  return (
    <p>
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length}{" "}
      completed
    </p>
  );
}
