import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalProvider } from "./context/global/global.context.tsx";
import App from "./App.tsx";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
);
