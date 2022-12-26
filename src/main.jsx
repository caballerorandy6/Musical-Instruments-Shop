import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ShopProvider } from "../context/ShopProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </React.StrictMode>
);
