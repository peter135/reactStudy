import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>首页</h1>
      <ul>
        <li><Link to="/page/login">登录</Link></li>
        <li><Link to="/page/backend">后台</Link></li>
        <li><Link to="/page/admin">管理员</Link></li>
      </ul>
    </>
  );
}

export default Home;

