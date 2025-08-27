import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Interface from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Interface />
  </StrictMode>
);
