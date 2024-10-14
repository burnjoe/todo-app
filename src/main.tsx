import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="86d6b46c433a41d9ac892835490b49a0"
      domain="https://bnje.kinde.com"
      redirectUri={
        process.env.NODE_ENV == "production"
          ? "https://todo-app-bnje.netlify.app/"
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV == "production"
          ? "https://todo-app-bnje.netlify.app/"
          : "http://localhost:5173"
      }
    >
      {/* Wrapped App with context provider to manage and provide state */}
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
