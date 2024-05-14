import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/context/language-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);
