import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
import { ThemeProvider } from "./contexts/ThemeContextProvider.jsx";
import './i18n.js';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <ContextProvider >
                    <RouterProvider router={router} />
                    <ToastContainer />
                </ContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>

);
