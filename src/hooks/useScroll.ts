import { useState, useEffect } from 'react';

export const useScrollDirection = (threshold: number = 0, offset: number = 10) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar if at the very top
      if (currentScrollY <= threshold) {
        setShowNavbar(true);
      }
      // Scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > threshold + offset) {
        setShowNavbar(false);
      }
      // Scrolling up
      else if (currentScrollY < lastScrollY - offset) {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, offset, lastScrollY]);

  return showNavbar;
};
