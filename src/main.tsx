import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./il8n.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Analytics />
  </React.StrictMode>
);
