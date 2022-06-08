import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Backend from './pages/backend';
import Admin from './pages/admin';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes';
import adminRoutes from './routes/adminRoutes';
import AuthRoute from './authRoute';

function Main() {
  return (
      <Switch>

        {publicRoutes.map(({path, component, ...route}) => 
            <Route key={path} path={path} component={component} {...route}/>
        )}

        {privateRoutes.map(
            (route) => <AuthRoute key={route.path} routeRole={'user'} {...route}/>
        )}
      </Switch>
  );
}

export default Main;