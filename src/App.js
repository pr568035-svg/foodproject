import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./page/Home/Home";
import Placeorder from "./page/Placeorder/Placeorder";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Cart from "./page/Card/Cart";


function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Placeorder />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
