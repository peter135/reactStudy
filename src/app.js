import React, { Component } from 'react';
import './index.css'
import 'lib-flexible'
import {ViewportProvider, useViewport} from '@/responsive/index.js'

import {GlobalStats_ } from '@/hooks/index.js';
import MyRCFieldForm  from '@/forms/myRCFieldForm.js';
import Index  from '@/router/index.js';
import HOCIndex  from '@/hoc/index.js';

import Scroller from '@/infiniteScroll/index'
import RoutesPermission from '@/permission/index'
import ForwardRefComponent from '@/forwardRef/index'
import DebounceThrottle from '@/debounce_throttle/index'

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

      // react hooks
      // <GlobalStats_/>

      // 表单提交
      // <MyRCFieldForm />

      // <Index/>

      // 高阶组件
      // <HOCIndex/>

      // <Child/> 

      // 无限滚动    
      // <Scroller/>

      // 路由鉴权
      // <RoutesPermission/>

      // forwardRef
      // <ForwardRefComponent/>

      // 防抖和节流
      <DebounceThrottle/>

    );
  }
}

export default App;

