import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../CSS/Navbar.css'
import { Link } from 'react-router-dom';
interface NavbarProps {
  cartItemsCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount }) => {
  return (
    <nav>
      <Link to="/" className="logo">Food and Cocktails</Link>
      <ul className="nav-links">
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/Food">FOOD</Link></li>
      <li><Link to="/AboutUs">ABOUT US</Link></li>
      <li><Link to="/ContactPage">CONTACT</Link></li>
      <li><Link to="/AdminPage">ADMIN</Link></li>
      </ul>
      <div className="cart-icon">
        <FaShoppingCart />
        <span className="cart-count">{cartItemsCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
