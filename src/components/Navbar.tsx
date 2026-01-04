import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

interface NavbarProps {
  show: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ show }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the menu whenever the route changes
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tags">Tags</Link></li> {/* New link for Tag Cloud */}
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <>
      <nav className={`${styles.navbar} ${show ? styles.show : ''}`}>
        <div className={styles.navbarContent}>
          <div className={styles.title}>
            <Link to="/">Click Moments</Link>
          </div>
          {/* Desktop Nav */}
          <ul className={styles.navLinks}>
            {navLinks}
          </ul>
          {/* Mobile Menu Button */}
          <div className={styles.menu}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              {menuOpen ? '[ X ]' : '[ = = = ]'}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          {navLinks}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
