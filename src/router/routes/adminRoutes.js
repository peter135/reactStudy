// adminRoutes.js
import Admin from '../pages/admin';

const adminRoutes = [
  {
    path: '/page/admin',
    component: Admin,
    exact: true,
    role: 'admin',       // 需要的权限是admin
    backUrl: '/backend'  // 不满足权限跳回后台页面
  },
];

export default adminRoutes;
