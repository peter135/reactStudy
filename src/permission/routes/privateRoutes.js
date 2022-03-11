// privateRoutes.js
import Backend from '../pages/backend';

const privateRoutes = [
  {
    path: '/backend',
    component: Backend,
    exact: true,
    role: 'admin',       // 当前路由需要的角色权限
    backUrl: '/login'   // 不满足权限跳转的路由
  },
];

export default privateRoutes;
