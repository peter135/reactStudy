import React, { Component } from 'react';
import {GlobalStats_ } from '@/hooks/index.js';
import MyRCFieldForm  from '@/forms/myRCFieldForm.js';
import Index  from '@/router/index.js';
import HOCIndex  from '@/hoc/index.js';
import './index.css'
import 'lib-flexible'
import {ViewportProvider, useViewport} from '@/responsive/index.js'

import Scroller from '@/infiniteScroll/index'
import RoutesPermission from '@/permission/index'

//2. 类组件
class Child extends Component {
  state = {}
  render() {
    return <div className="one">哈哈</div>
  }
}

class MobileComponent extends Component {
  state = {}
  render() {
    return <div className="one">手机端显示</div>
  }
}

class DesktopComponent extends Component {
  state = {}
  render() {
    return <div className="one">pc端显示</div>
  }
}


const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  }

class App extends Component {
  render() {
    return (
      // <ViewportProvider>
      //     <MyComponent/>
      // </ViewportProvider>

      /* <GlobalStats_/>
          <MyRCFieldForm />
          <Index/>
          <HOCIndex/>
          <Child/> */

      //无限滚动    
      // <Scroller/>

      //路由鉴权
      <RoutesPermission/>

    );
  }
}

export default App;

