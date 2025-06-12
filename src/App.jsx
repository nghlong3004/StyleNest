import { useState } from "react";
import Home from "./components/mainSelll";
import ProductManager from "./components/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<ProductManager />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
