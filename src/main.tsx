import { createRoot } from "react-dom/client";
import { RouterProvider } from '@tanstack/react-router';
import "./index.css";
import { router } from './router';
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
