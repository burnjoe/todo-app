import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Wrapped App with context provider to manage and provide state */}
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </StrictMode>
);
