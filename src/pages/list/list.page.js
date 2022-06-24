import React from 'react';
import useLocalStorage from 'use-local-storage';
import styles from './list.module.scss';

import DropDown from '@/components/dropdown/index';

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

  function ThemeSwitch() {
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
      </div>
    );
  
  }  

  function BootStrapDemo() {
    return (
      <div className="container-fluid">
         <div className="row ">
             <div className={`col-12 col-md-8 ${styles._red}`}>.col-12 .col-md-8</div>
             <div className={`col-12 col-md-4 ${styles._green}`}>.col-6 .col-md-4</div>
         </div>
        <div className="row">
             <div className={`col-12 col-md-4 ${styles._red}`}>.col-6 .col-md-4</div>
             <div className={`col-12 col-md-4 ${styles._green}`}>.col-6 .col-md-4</div>
             <div className={`col-12 col-md-4 ${styles._blue}`}>.col-6 .col-md-4</div>
        </div>
     </div>
    )
  }

  return (
    <>
      {/* <ThemeSwitch/> */}
      {/* <DropDown/> */}
      <BootStrapDemo/>
    </>

  )

}


export default App;


// hooks
//    {/* <Counter/>
//  <RefTutorial/>
//  <ReducerTutorial/>
//  <CallBackTutorial/>
//  <ContextTutorial/>
//  <EffectTutorial/>
//  <ImperativeHandle/>
//  <LayoutEffectTutorial/>
//  <MemoTutorial/> */}
