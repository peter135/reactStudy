import React from 'react';
import useLocalStorage from 'use-local-storage';
import styles from './list.module.scss';
import {Counter} from '@/components/hooks/index';


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className={styles.app} data-theme={theme}>
      <span>Easy Darkmode and Themes in React</span>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
     <Counter/>
    </div>
  );
}

export default App;
