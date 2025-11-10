import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import { Toaster } from "react-hot-toast";

const queryCline = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryCline}>
      <RouterProvider router={router} />
      <Toaster/>
    </QueryClientProvider>
  </StrictMode>
);