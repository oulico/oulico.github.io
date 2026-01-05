import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import TuiBox from './TuiBox';

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
      <li><Link to="/">Home [H]</Link></li>
      <li><Link to="/tags">Tags [T]</Link></li>
      <li><Link to="/about">About [A]</Link></li>
    </>
  );

  const mobileNavLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tags">Tags</Link></li>
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
              {menuOpen ? <i className="nf nf-fa-times"></i> : <i className="nf nf-fa-bars"></i>}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <TuiBox title="Menu">
          <ul>
            {mobileNavLinks}
          </ul>
        </TuiBox>
      </div>
    </>
  );
};

export default Navbar;
