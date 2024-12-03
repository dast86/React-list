import { createRoot } from "react-dom/client";
import React from "react";
import RouterProvider from "./providers/RouterProvider";
import StoreProvider from "./providers/StoreProvider";
import "./styles/index.css";



createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider/>
    </StoreProvider>
  </React.StrictMode>
);
