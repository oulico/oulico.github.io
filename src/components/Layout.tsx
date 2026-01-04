import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar show={true} />
      {isHomePage && <Header />}
      <main className={`${styles.mainContent} ${!isHomePage ? styles.mainContentPadded : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
