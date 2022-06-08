import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import AuthRoute from './authRoute';
import NotFound404 from '@/pages/notFound/notFound'
import PageNotFound404 from '@/pages/notFound/pageNotFound'
import Login from '@/pages/login/login'
import { NavigationContainer } from '@/pages/navigation/navigation.page'
import { ListPageContainer } from '@/pages/list/list.page'
import { MyPageContainer } from '@/pages/mypage/mypage.page'

const mainRoutes = [
  {
    path: '/',
    component: NavigationContainer,
    exact: true,
  },
  {
    path: '/page',
    component: NavigationContainer,
  },
  {
    path: '/Login',
    component: Login,
    exact: true,
  },
  {
    component: NotFound404,
  },

];

const pageRoutes = [
  {
    path: '/page/list',
    component: ListPageContainer,
    exact: true,
    role: 'user',       // 当前路由需要的角色权限
    backUrl: '/login'   // 不满足权限跳转的路由
  },
  {
    path: '/page/mypage',
    component: MyPageContainer,
    exact: true,
    role: 'admin',       // 当前路由需要的角色权限
    backUrl: '/login'   // 不满足权限跳转的路由
  },
  {
    role: 'user',    
    component: PageNotFound404,
  },

];

// 一级路由
export  const  Main = ()=> {
  return (
      <Switch>
        {mainRoutes.map(({path, component, ...route}) => <Route key={path} path={path} component={component} {...route}/>)}
      </Switch>
  );
}

// 二级路由
export  const  Pages = ()=> {
  return (
      <Switch>
        {pageRoutes.map( (route) => <AuthRoute key={route.path} routeRole={'user'} {...route}/> )}
      </Switch>
  );
}

