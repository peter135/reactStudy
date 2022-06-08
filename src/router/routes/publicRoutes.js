import Login from '../pages/login';
import Home from '../pages/home';
import Backend from '../pages/backend';

const publicRoutes = [
  {
    path: '/page/login',
    component: Login,
    exact: true,
  },
  {
    path: '/page/',
    component: Home,
    exact: true,
  },
  {
    path: '/page/backend',
    component: Backend,
    exact: true,
    role: 'admin',       // 当前路由需要的角色权限
    backUrl: '/page/login'   // 不满足权限跳转的路由
  },

];

export default publicRoutes;
