import * as React from 'react';
import styles from './Footer.module.css';

export interface IAppProps {
}

export function Footer (props: IAppProps) {
  return (
    <footer className={styles.footer}>
        <p>
        <span>React + TS Todo</span> @2025
        </p>
  </footer>
  );
}

export default Footer;