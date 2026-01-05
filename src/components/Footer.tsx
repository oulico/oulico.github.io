import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href="https://github.com/oulico" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <i className="nf nf-dev-github_badge"></i>
        </a>
        <p>© {currentYear} oulico</p>
      </div>
    </footer>
  );
};

export default Footer;
