// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./components/context.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
