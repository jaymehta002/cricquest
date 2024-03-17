import NavBar from "./components/NavBar"
import Game from "./components/Game";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useState } from "react";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
