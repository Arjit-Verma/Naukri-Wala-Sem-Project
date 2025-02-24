import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
