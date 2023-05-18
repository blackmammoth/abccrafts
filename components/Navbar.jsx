import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className="navbar-container">
      
        <Link href="/"> <img src="./apple-touch-icon.png" className="logo_image"/> <span className="logo"> ABC CRAFTS </span></Link>
      
      <Link href="/custom/designs">
      <button type="button" className="custom-designs">
        Custom Designs
      </button>
      </Link>
    </div>
  )
}

export default Navbar