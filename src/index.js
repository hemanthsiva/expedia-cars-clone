// src/index.js
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";

// Get the root element
const container = document.getElementById("root");
const root = createRoot(container); // Create a root

// Render the app
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
