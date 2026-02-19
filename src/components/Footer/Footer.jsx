import React from 'react'
import './Footer.css'
import {assets } from '../../assets/frontend_assets/assets'


function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>

        <div className='footer-content-left'>
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nisi, perferendis. Adipisci eos laboriosam minus.
          </p>

          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-637-607-8142</li>
            <li>pr568035@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className='footer-copyright'>
        Copyright 2024 © tomato.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
