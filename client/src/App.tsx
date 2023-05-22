import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { NotePadAnim } from "./routes/NotePadAnim";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { EditNotepad } from "./components/EditNotepad";
import { About } from "./routes/About";
import React from "react";
import { SingleView } from "./routes/SingleView";

function App() {
  return (
    <div className="bg-[#272728] h-full w-full">
      <BrowserRouter>
        <AppHeader />
        <div className="flex h-max mt-14">
          <div className=" w-2/12 h-max"></div>
          <div className=" w-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notepads/" element={<NotePadAnim />} />
              <Route path="/publicacoes/:id" element={<SingleView />} />
              <Route path="/publicacoes/editar/:id" element={<EditNotepad />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
