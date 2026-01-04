import React from 'react';
import { useScroll } from '../hooks/useScroll';
import AsciiArt from './AsciiArt';
import Navbar from './Navbar';
import styles from './Header.module.css';

const Header: React.FC = () => {
    // Show navbar when scrolled more than 50px
    const scrolled = useScroll(50);

    return (
        <header className={styles.header}>
            <div className={`${styles.asciiContainer} ${scrolled ? styles.hide : ''}`}>
                <AsciiArt />
            </div>
            <Navbar show={scrolled} />
        </header>
    );
};

export default Header;
