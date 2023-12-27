import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
