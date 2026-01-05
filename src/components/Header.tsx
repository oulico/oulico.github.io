import React from 'react';
import AsciiArt from './AsciiArt';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.asciiContainer}>
                <AsciiArt />
            </div>
        </header>
    );
};

export default Header;
