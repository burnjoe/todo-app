import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import TodoList from "./TodoList";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useState } from "react";

// Defined the Todo type similar to how we create a record/class in Java
// Export to enable reusability of this Todo type
export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function App() {
  // State
  const [todos, setTodos] = useState<Todo[]>([]);

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

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">
      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />

        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />

        <Sidebar handleAddTodo={handleAddTodo} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
