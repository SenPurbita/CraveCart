import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id = 'footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo}alt=""  />
                <p>Crave-Cart is your go-to platform for a seamless, multilingual food delivery experience. Our mission is to connect you with your favorite restaurants and food vendors while ensuring convenience, quality, and speed. Whether you’re craving a quick bite or planning a feast with friends, Crave-Cart delivers food to your doorstep from the best local eateries.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>   
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-82323-23232</li>
                    <li>+033-7868-3422</li>
                    <li>contact.cravecart@gmail.com</li>
                </ul>
            </div>   
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ CraveCart.com - All Right Reseved.</p>
    </div>
  )
}

export default Footer