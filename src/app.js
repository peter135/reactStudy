import React, { Component } from 'react';
import {GlobalStats_ } from '@/hooks/index.js';
import MyRCFieldForm  from '@/forms/myRCFieldForm.js';
import Index  from '@/router/index.js';
import HOCIndex  from '@/hoc/index.js';
import './index.css'
import 'lib-flexible'

//2. 类组件
class Child extends Component {
  state = {}
  render() {
    return <div className="one">哈哈</div>
  }
}

class App extends Component {
  render() {
    return (
      <>
          {/* <GlobalStats_/>
          <MyRCFieldForm />
          <Index/>
          <HOCIndex/> */}
          <Child/>
      </>
        
    );
  }
}

export default App;

