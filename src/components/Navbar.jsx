import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "./Context/StoreContext";


import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartItems } =React.useContext(StoreContext)


  

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="logo" className="logo" /></Link>

     <ul className="navbar-menu">

       <li><Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link></li>
        <li><a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a></li>
        <li><a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a></li>
        <li><a href='#footer'  onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a></li>
      </ul>
   
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="cart" /></Link>
          <div className={getTotalCartItems()===0? "" : "dot"}></div>
        </div>

        <button onClick={()=> setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
