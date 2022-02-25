// import './index.css'

// const el = document.getElementById('root');
// el.innerHTML = 'hello webpack5';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Counter} from '@/hooks/index.js';

ReactDOM.render(<Counter />, document.getElementById('root'));
