import * as React from 'react';
import styles from './Header.module.css';

export interface IAppProps {
}

export function Header (props: IAppProps) {
  return (
    <header className={styles.header}> 
        <h1>TODO REACT</h1>
    </header>
  );
}

export default Header;
