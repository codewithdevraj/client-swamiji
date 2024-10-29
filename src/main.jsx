import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routemain from "./routes/routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routemain />
  </StrictMode>
);
