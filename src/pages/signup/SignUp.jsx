import React, { useState } from 'react';
import classes from './SignUp.module.css';
import Button from '../../components/Button/Button';
import User1 from '../../Images/User1.svg';

function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const UsernameChangeHandler = (event) => {
      setUsername(event.target.value);
    };

    const EmailChangeHandler = (event) => {
      setEmail(event.target.value);
    };

    const PasswordChangeHandler = (event) => {
      setPassword(event.target.value);
    };

    const ConfirmPasswordChangeHandler = (event) => {
      setConfirmPassword(event.target.value);
    };

    const SubmitHandler = (event) => {
      event.preventDefault();
     

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    };

  return (
    <div className={classes.partition}>

      <div className={classes.signup}>
        <img src={ User1 } alt="user" className={classes.users}/>
        <h1 className={classes.heading}>Hello Friend!</h1>
        <p>Enter Your Personal Details And Start A Journey With Us.</p>
      </div>

      <div className={classes.content}>

        <form onSubmit={SubmitHandler}>

          <h1 className={classes.heading}>Create Account</h1>

          <label>
            {/* Username: */}
            <input className={classes['my-input']} type="text" value={username} onChange={UsernameChangeHandler} placeholder="UserName"/>
          </label>
          <br />
          <label>
            {/* Email: */}
            <input className={classes['my-input']} type="email" value={email} onChange={EmailChangeHandler} placeholder="Email"/>
          </label>
          <br />
          <label>
            {/* Password: */}
            <input className={classes['my-input']} type="password" value={password} onChange={PasswordChangeHandler} placeholder="Password"/>
          </label>
          <br />
          <label>
            {/* Confirm Password: */}
            <input className={classes['my-input']} type="password" value={confirmPassword} onChange={ConfirmPasswordChangeHandler} placeholder="Confirm Password" />
          </label>
          <br />

          <div className={classes['button-position']}>
            <Button className={classes['button-position']} type="submit">Sign Up</Button>
          </div>
          
        </form>
      </div>
      
    </div>
  )
}

export default SignUp;