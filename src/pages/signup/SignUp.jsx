import React, { useState } from 'react';
import classes from './SignUp.module.css';
import Button from '../../components/Button/Button';
import User1 from '../../Images/User1.svg';
import Error from '../../components/ErrorModal/Error';

function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState();
    const [doctorSignUp, setDoctorSignUp] = useState(true);
    const [preferredPhysician, setPreferredPhysician] = useState('');

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

      if(username.trim().length === 0 || email.trim().length ===0 || password.trim().length === 0 || confirmPassword.trim().length === 0){
        setError({
          title : "Invalid Input",
          message: "Fill all the input fields"
        });
        return;
      }
     

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    };

    const errorHandler = () => {
      setError(null);
    }

  return (
    <div className={classes.partition}>

      { error && <Error title={error.title} message={error.message} onConfirm={errorHandler}/>}

      <div className={classes.signup}>
        <img src={ User1 } alt="user" className={classes.users}/>
        <h1 className={classes.heading}>Hello Friend!</h1>
        <p>Enter Your Personal Details And Start A Journey With Us.</p>
      </div>

      <div className={classes.content}>

        <form onSubmit={SubmitHandler} className={classes['form-data']}>

          <h1 className={classes.heading}>Create Account</h1>

          <div className={classes.tabs}>

            <div className={doctorSignUp ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setDoctorSignUp(true)}>
                <p>Patient</p>
            </div>

            <div className={!doctorSignUp ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setDoctorSignUp(false)}>
                <p>Doctor</p>
            </div>

          </div>


          { !doctorSignUp && <label>
            {/* Username: */}
            <input className={classes['my-input']} type="text" value={username} onChange={UsernameChangeHandler} placeholder="Doctor Ref. No."/>
          </label>}
          { doctorSignUp && <label>
            {/* Username: */}
            <input className={classes['my-input']} type="text" value={username} onChange={UsernameChangeHandler} placeholder="UserName"/>
          </label>}
          <br />
          <label>
            {/* Email: */}
            <input className={classes['my-input']} type="email" value={email} onChange={EmailChangeHandler} placeholder="Email"/>
          </label>
          <br />
          {!doctorSignUp &&  <label htmlFor="preferredPhysician">
            <select id="preferredPhysician" value={preferredPhysician} onChange={(e) => setPreferredPhysician(e.target.value)}>
                <option value="">Select Specialization</option>
                <option value="generalpractitioner">General Practitioner</option>
                <option value="pediatrician">Pediatrician</option>
                <option value="gynecologistr">Gynecologist</option>
                <option value="neurologist">Neurologist</option>'
                <option value="dermatologist">Dermatologist</option>
                <option value="other">Other</option>
            </select>
          </label>}
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

          <div>
            {/* <p>Sign Up as a Doctor? <span>Sign Up</span></p> */}
          </div>
          
        </form>
      </div>
      
    </div>
  )
}

export default SignUp;