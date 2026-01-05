import React from 'react';
import styles from './TuiBox.module.css';

interface TuiBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TuiBox: React.FC<TuiBoxProps> = ({ title, children, className }) => {
  return (
    <div className={`${styles.box} ${className || ''}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default TuiBox;
