import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./assets/css/main.css";
import "./assets/css/animate.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
