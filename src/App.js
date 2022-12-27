import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import MyContext from "./myContext";

export default function App() {
  const [fotos, setFotos] = useState([]);
  const [favoritas, setFavoritas] = useState([]);

  return (
    <div className="App">
      <MyContext.Provider value={{ fotos, setFotos, favoritas, setFavoritas }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
