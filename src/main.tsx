import { createRoot } from "react-dom/client";
import { RouterProvider } from '@tanstack/react-router';
import "./index.css";
import { router } from './router';
import { ThemeProvider } from "./components/theme-provider";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);
