import React, { Component } from 'react';
import {GlobalStats_ } from '@/hooks/index.js';
import MyRCFieldForm  from '@/forms/myRCFieldForm.js';
import Index  from '@/router/index.js';

class App extends Component {
  render() {
    return (
      <>
          {/* <GlobalStats_/>
          <MyRCFieldForm /> */}
          <Index/>
      </>
        
    );
  }
}

export default App;

