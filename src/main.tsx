import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import authStore from "./store/authStore.ts";
import balanceStore from "./store/balanceStore.ts";

const stores = {
  authStore,
  balanceStore,
};
export const Context = createContext({ stores });
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context.Provider value={{ stores }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
