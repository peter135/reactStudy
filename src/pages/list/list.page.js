import React from 'react';
import useLocalStorage from 'use-local-storage';
import styles from './list.module.scss';
import {Counter} from '@/components/hooks/index';
import {RefTutorial} from '@/components/hooks/index';
import {ReducerTutorial} from '@/components/hooks/index';
import {CallBackTutorial} from '@/components/hooks/index';
import {ContextTutorial} from '@/components/hooks/index';
import {EffectTutorial} from '@/components/hooks/index';
import {ImperativeHandle} from '@/components/hooks/index';
import {LayoutEffectTutorial} from '@/components/hooks/index';
import {MemoTutorial} from '@/components/hooks/index';

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
           {/* <Counter/>
           <RefTutorial/>
           <ReducerTutorial/>
           <CallBackTutorial/>
           <ContextTutorial/>
           <EffectTutorial/>
           <ImperativeHandle/>
           <LayoutEffectTutorial/>
           <MemoTutorial/> */}
    </div>
  );
}

export default App;
