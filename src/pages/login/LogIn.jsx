import React, { useContext, useEffect, useState } from 'react';
import classes from './LogIn.module.css';
import Button from '../../components/Button/Button';
import User1 from '../../Images/User1.svg';
import Error from '../../components/ErrorModal/Error';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../services/auth-context';
import ActivityIndicator from '../../components/ActivitiyIndicator/ActivityIndicator';
import { Link } from 'react-router-dom';

function LogIn() {

  const { login, doctorLogin } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [doctorSignUp, setDoctorSignUp] = useState(false);
  const navigate = useNavigate();

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const RegistrationChangeHandler = (event) => {
    setRegNo(event.target.value);
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const form = { email, password, regNo };
      doctorSignUp ? await doctorLogin(form) : await login(form);
      doctorSignUp ? navigate('/doctor-appointment') : navigate('/home')
    } catch (err) {
      const errMessage = err?.response?.data?.content || err?.response?.data?.message || err?.message;
      setError({ title : "Error", message: errMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  useEffect(() => {
      setEmail('');
      setError();
      setPassword('');
      setEmail('');
    }, [doctorSignUp])

  return (
    <div className={classes.partition}>

    { error && <Error title={error.title} message={error.message} onConfirm={errorHandler}/>}

      <div className={classes.login}>
        <img src={ User1 } alt="user" className={classes.users}/>
        <h1 className={classes.heading}>Welcome Back!</h1>
        <p>To Keep Connected With Us, Please Log In With Your Personal Info</p>
      </div>

      <div className={classes.content}>

        <form onSubmit={SubmitHandler}>

          <h1 className={classes.heading}>Log In</h1>

          <div className={classes.tabs}>

            <div className={!doctorSignUp ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setDoctorSignUp(false)}>
                <p>Patient</p>
            </div>

            <div className={doctorSignUp ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setDoctorSignUp(true)}>
                <p>Doctor</p>
            </div>

          </div>


          {doctorSignUp && <label>
            {/* Username: */}
            <input className={classes['my-input']} type="text" value={regNo} onChange={RegistrationChangeHandler} placeholder="Doctor Ref. No."/>
          </label>}
          {!doctorSignUp && <label>
            {/* Username: */}
            <input className={classes['my-input']} type="email" value={email} onChange={EmailChangeHandler} placeholder="Email"/>
          </label>}
          <br />
          <label>
            {/* Password: */}
            <input className={classes['my-input']} type="password" value={password} onChange={PasswordChangeHandler} placeholder="Password"/>
          </label>
          <br />

          <div className={classes['button-position']}>
            {!isLoading && <Button type="submit">Log In</Button>}
            {isLoading && <ActivityIndicator />}
          </div>
          
        </form>

        <div className={classes.signup}>
          <p>Do Not Have An Account? <Link to="/signup" style={{ textDecoration: 'none' }}> <span className={classes.link}> Sign Up </span> </Link></p>
        </div>
        
      </div>
        
      
    </div>
  )
}

export default LogIn;