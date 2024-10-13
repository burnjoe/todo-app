import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

// TypeTodosContext (TTodosContext)
type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

// TODO: Explore usage of Redux (this is not redux)
export default function TodosContextProvider({
  children,
}: TodoContextProviderProps) {
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  };

  // State
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // Derived State
  // Done so that we don't have to pass the entire todos to inner components just for them to derive the total length of todos
  const totalNumberOfTodos = todos.length;

  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // Event Handlers / Actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Please log in or register to add more todos.");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    // The 'prev' refers to previous state of todos array (current list of todos)
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Side Effects
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
