import NavBar from "./components/NavBar"
import Game from "./components/Game";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
