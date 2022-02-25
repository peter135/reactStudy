import React, { Component } from 'react';
// import plus from '~/plus.jpg';
import {GlobalStats_ } from '@/hooks/index.js';
import MyRCFieldForm  from '@/forms/myRCFieldForm.js';

class App extends Component {
  render() {
    return (
      <>
          <GlobalStats_/>
          <MyRCFieldForm />
      </>
        
    );
  }
}

export default App;

