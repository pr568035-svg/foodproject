import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";



function LoginPopup({ setShowLogin}) {

        const [currState,setCurrstate] = useState("Login");
  return (

        <div className="login-popup">
                <form className="login-popup-title">

                        <div className="login-popup-tital"> 
                                <h2>{currState}</h2>
                                <img  onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt="Close" />

                        </div>
                        <div className="login-popup-input">
                                {currState === "Sign up" && <input type="text" placeholder=" your name"  required/>}
                                <input type="email" name="" id="" placeholder=" your email" required/>
                                <input type="password" placeholder=" your password" required/>
                        </div>
                        <button>{currState === "Sign up" ? "Sign up" : "Login"}</button>
                        <div className="login-popup-condition">
                                <input type="checkbox" required />
                                <p>By continuing, I agree to the terms of use & privacy policy.</p>

                        </div>
                        {currState === "Login" 
                        ? <p>Don't have an account? <span onClick={()=>setCurrstate("Sign up")}>Sign up</span></p> 
                        : <p>Already have an account? <span onClick={()=>setCurrstate("Login")}>Login</span></p>
                        }
                </form>
        </div>
        
      
        

  )
   
}

export default LoginPopup;
