import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EmojiBox from "./EmojiBox";
import "./index.css";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  console.log("Error not found root");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <EmojiBox />
  </StrictMode>
);
