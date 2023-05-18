import React from 'react';
import { AiFillInstagram} from 'react-icons/ai';
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2023 ABC Crafts All rights reserverd</p>
      <p className="icons">
        <a href='http://instagram.com/abccraftsgallery'><AiFillInstagram /></a>
        <a href="http://t.me/abccraftsgallery"><FaTelegramPlane /></a>
        <a href="http://www.tiktok.com/@abccraftsgallery"><FaTiktok /></a>
        <a href=''></a>
      </p>
    </div>
  )
}

export default Footer