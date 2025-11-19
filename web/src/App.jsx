import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlunoDetalhe from "./pages/AlunoDetalhe";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos/:id" element={<AlunoDetalhe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
