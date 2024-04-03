import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'

interface NavbarProps {
  cartItemsCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount }) => {
  return (
    <nav>
      <div className="logo">Food and Cocktails</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="cart-icon">
        <FaShoppingCart />
        <span className="cart-count">{cartItemsCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
