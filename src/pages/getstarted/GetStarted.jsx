import React from 'react';
import Doctor1 from '../../Images/Doctor1.svg';
import classes from './GetStarted.module.css';
import Button from '../../components/Button/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


function GetStarted() {

  const navigate = useNavigate();
  return (
    <div className={classes['get-started']}>

      <div>
        <img src={ Doctor1 } alt="doctors"  className={classes.doctor}/>
      </div>

      <div className={classes.content}>
        <h1 className={classes.heading}>Health Connect</h1>
        <p className={classes['my-text']}>Begin your journey to connect with your doctor in just a few easy steps</p>

        <Button onClick={() => { navigate('/login') }}>Get Started <AiOutlineArrowRight className={classes.arrow}/> </Button>
      </div>
      
    </div>
  )
}

export default GetStarted;