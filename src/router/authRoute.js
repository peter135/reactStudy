// AuthRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute(props) {
  const {
    path,
    backUrl,
    routeRole,
    ...otherProps
  } = props;

  const role = localStorage.getItem('role');
  const loginpath = backUrl + '?redirect=' + path

  // 如果用户有权限，就渲染对应的路由
  if (routeRole && routeRole.indexOf(role) > -1) {
    return <Route {...otherProps} />
  } else {
    // 如果没有权限，返回配置的默认路由
    return <Redirect to={loginpath}/>
  }
}

export default AuthRoute;
