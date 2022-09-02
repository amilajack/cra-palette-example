import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  init,
  events,
  vitals,
  measure,
  network,
  profiler,
} from "@palette.dev/browser";

init({
  key: "YOUR_CLIENT_KEY",
  // Collect click, web vitals, network, performance events, and profiles
  plugins: [events(), vitals(), network(), measure(), profiler()],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
