import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy loading components
const NavBar = React.lazy(() => import("./components/NavBar"));
const Game = React.lazy(() => import("./components/Game"));
const Home = React.lazy(() => import("./components/Home"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Game />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
