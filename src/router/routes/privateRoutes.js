// privateRoutes.js
import Backend from '../pages/backend';

const privateRoutes = [
  {
    path: '/page/backend',
    component: Backend,
    exact: true,
    role: 'admin',       // 当前路由需要的角色权限
    backUrl: '/page/login'   // 不满足权限跳转的路由
  },
];

export default privateRoutes;
