import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendsReferred from "./routes/FriendsReferred";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/friends-referred" element={<FriendsReferred />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
