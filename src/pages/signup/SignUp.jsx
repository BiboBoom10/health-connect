import React, { useContext, useEffect, useState } from 'react';
import classes from './SignUp.module.css';
import Button from '../../components/Button/Button';
import User1 from '../../Images/User1.svg';
import Error from '../../components/ErrorModal/Error';
import { AuthContext } from '../../services/auth-context';
import ActivityIndicator from '../../components/ActivitiyIndicator/ActivityIndicator';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const { signup, doctorSignup } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState();
    const [isDoctorSignUp, setIsDoctorSignUp] = useState(false);
    const [preferredPhysician, setPreferredPhysician] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

    const SubmitHandler = async (event) => {
      event.preventDefault();
      if (confirmPassword !== password) {
        setError({ title : "Error", message: 'Your passwords should match' });
        return;
      }
      setIsLoading(true);

      try {
        const form = { username, email, password, specialization: preferredPhysician  };
        isDoctorSignUp ? await doctorSignup(form) : await signup(form);
        isDoctorSignUp ? navigate('/doctor-appointment') : navigate('/home');
      } catch (err) {
        const errMessage = err?.response?.data?.content || err?.response?.data?.message || err?.message;
        setError({ title : "Error", message: errMessage });
      } finally {
        setIsLoading(false);
      }

    };

    const errorHandler = () => {
      setError(null);
    }

    useEffect(() => {
      setConfirmPassword('');
      setEmail('');
      setError();
      setPassword('');
      setUsername('');
    }, [isDoctorSignUp])

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

            <div className={!isDoctorSignUp ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setIsDoctorSignUp(false)}>
                <p>Patient</p>
            </div>

            <div className={isDoctorSignUp ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setIsDoctorSignUp(true)}>
                <p>Doctor</p>
            </div>

          </div>


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
          {isDoctorSignUp &&  <label htmlFor="preferredPhysician">
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
            {!isLoading && <Button className={classes['button-position']} type="submit">Sign Up</Button>}
            {isLoading && <ActivityIndicator />}
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