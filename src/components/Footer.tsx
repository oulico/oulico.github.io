import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href="https://github.com/oulico" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          <pre>{`
 /\\_/\\
( o.o )
 > ^ <
`}</pre>
        </a>
        <p>© {currentYear} oulico</p>
      </div>
    </footer>
  );
};

export default Footer;
