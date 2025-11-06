import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes"; 
import '@ant-design/v5-patch-for-react-19';
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);
