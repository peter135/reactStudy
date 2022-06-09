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
    key:'NavigationContainer',
    component: NavigationContainer,
    exact: true,
  },
  {
    path: '/page',
    key:'NavigationContainer_Page',
    component: NavigationContainer,
  },
  {
    path: '/Login',
    key:'Login',
    component: Login,
    exact: true,
  },
  {
    key:'NotFound404',
    component: NotFound404,
  },

];

const pageRoutes = [
  {
    path: '/page/list',
    key:'ListPageContainer',
    component: ListPageContainer,
    exact: true,
    role: 'user',       // 当前路由需要的角色权限
    backUrl: '/login'   // 不满足权限跳转的路由
  },
  {
    path: '/page/mypage',
    key:'MyPageContainer',
    component: MyPageContainer,
    exact: true,
    role: 'admin',       // 当前路由需要的角色权限
    backUrl: '/login'   // 不满足权限跳转的路由
  },
  {
    key:'PageNotFound404',
    role: 'user',    
    component: PageNotFound404,
  },

];

// 一级路由
export  const  Main = ()=> {
  return (
      <Switch>
        {mainRoutes.map(({key,path, component, ...route}) => <Route key={key} path={path} component={component} {...route}/>)}
      </Switch>
  );
}

// 二级路由
export  const  Pages = ()=> {
  return (
      <Switch>
        {pageRoutes.map( (route) => <AuthRoute key={route.key} routeRole={'user'} {...route}/> )}
      </Switch>
  );
}

