import React from 'react';
import styles from './login.module.scss'
 
export default class LoginPage extends React.Component {


  handleSubmit (event)  {
    event.preventDefault();
    localStorage.setItem('role', 'admin');
    this.props.history.push('/page/mypage') 
  }

  render(){

       return (
         <div className={styles.content}>
            <div>Login Page</div>
             <form onSubmit={(event)=>this.handleSubmit(event)} >
               <div className={styles.formItem}>
                <span>用户名: </span> 
                 <input name="username" type="text" />
               </div>
               <div className={styles.formItem}>
                 <span>密码: </span> 
                 <input name="username" type="text" />
               </div>
               <button type="submit">登录</button>
             </form>
         </div>

       );
  }


  }
