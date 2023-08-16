import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "./Header";
import Nav from "./Navigation";
import "./index.css";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  console.log("Error not found root");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <Nav />
    <App />
  </StrictMode>
);
