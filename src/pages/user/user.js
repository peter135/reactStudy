import React from 'react';
import styles from './user.module.scss'

export default function User() {

    const setRole = (role)=>{
        if(role){
            localStorage.setItem('role',role);
        }else {
            localStorage.removeItem('role');
        }
        
    }

    return (
          <div className={styles.content}>
          <h1>Userpage</h1>
           <button type="submit" onClick={()=>setRole('user')}>user</button>
           <button type="submit" onClick={()=>setRole('admin')}>admin</button>
           <button type="submit" onClick={()=>setRole('')}>normal</button>

      </div>
    );

}