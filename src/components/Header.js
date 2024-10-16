import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Import the CSS file
import aboutUsIcon from '../images/about-us-icon.png'; // Import the About Us icon
import avatar from '../images/avatar.png';
import cartIcon from '../images/cart-icon.png';
import homeIcon from '../images/home-icon.png';
import logo from '../images/logo.png';
import orderHistoryIcon from '../images/order-history-icon.png';

function Header({ cart }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleProfileClick = () => {
    // Handle profile click
  };

  const handleLogoutClick = () => {
    // Handle logout click
  };

  const handleNavLinkClick = () => {
    setMenuVisible(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Company Logo" className="company-logo" />
      </div>
      <div className="header-right">
        <div className="hamburger-menu" onClick={() => setMenuVisible(!menuVisible)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-menu ${menuVisible ? 'visible' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
            <img src={homeIcon} alt="Home" className="nav-icon" /> Home
          </Link>
          <Link to="/order-history" className="nav-link" onClick={handleNavLinkClick}>
            <img src={orderHistoryIcon} alt="Order History" className="nav-icon" /> Orders
          </Link>
          <Link to="/about-us" className="nav-link" onClick={handleNavLinkClick}>
            <img src={aboutUsIcon} alt="About Us" className="nav-icon" /> About Us
          </Link>
          <Link to="/cart" className="nav-link cart-link" onClick={handleNavLinkClick}>
            <img src={cartIcon} alt="Cart" className="nav-icon" />
            <span className="cart-count">{cart.length}</span>
          </Link>
        </nav>
        <div className="user-profile" onClick={() => setDropdownVisible(!dropdownVisible)}>
          <img src={avatar} alt="User Avatar" className="user-avatar" />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={handleProfileClick}>Profile</div>
              <div className="dropdown-item" onClick={handleLogoutClick}>Logout</div>
            </div>
          )}
        </div>
      </div>
      <nav className={`side-panel ${menuVisible ? 'visible' : ''}`}>
        <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
          <img src={homeIcon} alt="Home" className="nav-icon" /> Home
        </Link>
        <Link to="/order-history" className="nav-link" onClick={handleNavLinkClick}>
          <img src={orderHistoryIcon} alt="Order History" className="nav-icon" /> Orders
        </Link>
        <Link to="/about-us" className="nav-link" onClick={handleNavLinkClick}>
          <img src={aboutUsIcon} alt="About Us" className="nav-icon" /> About Us
        </Link>
        <Link to="/cart" className="nav-link cart-link" onClick={handleNavLinkClick}>
          <img src={cartIcon} alt="Cart" className="nav-icon" />
          <span className="cart-count">{cart.length}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;