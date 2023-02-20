import React, { useState } from 'react';
import classes from './LogIn.module.css';
import Button from '../../components/Button/Button';
import User1 from '../../Images/User1.svg';

function LogIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const UsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    
    setUsername("");
    setPassword("");
  };

  return (
    <div className={classes.partition}>

      <div className={classes.login}>
        <img src={ User1 } alt="user" className={classes.users}/>
        <h1 className={classes.heading}>Welcome Back!</h1>
        <p>To Keep Connected With Us, Please Log In With Your Personal Info</p>
      </div>

      <div className={classes.content}>

        <form onSubmit={SubmitHandler}>

          <h1 className={classes.heading}>Log In</h1>

          <label>
            {/* Username: */}
            <input className={classes['my-input']} type="text" value={username} onChange={UsernameChangeHandler} placeholder="UserName"/>
          </label>
          <br />
          <label>
            {/* Password: */}
            <input className={classes['my-input']} type="password" value={password} onChange={PasswordChangeHandler} placeholder="Password"/>
          </label>
          <br />

          <div className={classes['button-position']}>
            <Button type="submit">Log In</Button>
          </div>
          
        </form>
      </div>
      
    </div>
  )
}

export default LogIn;