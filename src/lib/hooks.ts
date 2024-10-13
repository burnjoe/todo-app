import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

// Custom hook for using the todo context but checking it first if it's null
export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }
  return context;
}
