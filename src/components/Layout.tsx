import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import TuiBox from './TuiBox';
import styles from './Layout.module.css';
import { useScrollDirection } from '../hooks/useScroll'; // Import useScrollDirection

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const showNavbar = useScrollDirection(80, 10); // Use the new hook

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore hotkeys if the user is typing in an input field
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'h':
          navigate('/');
          break;
        case 't':
          navigate('/tags');
          break;
        case 'a':
          navigate('/about');
          break;
        // Add other hotkeys here if needed
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className={styles.tuiLayout}>
      <TuiBox title="[N] Navigation">
        <Navbar show={showNavbar} />
      </TuiBox>
      
      <main className={styles.mainContent}>
        <TuiBox title="[C] Content">
          {children}
        </TuiBox>
      </main>

      <TuiBox title="[F] Footer">
        <Footer />
      </TuiBox>
    </div>
  );
};

export default Layout;


