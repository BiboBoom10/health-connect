import React from 'react';
import NavBar from '../../components/Nav/NavBar';
import classes from './Home.module.css';
import Doctor1 from '../../Images/Doctor3.svg';

function Home() {
  return (
    <div>
        <NavBar />

        <div className={classes.home}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <h1>Welcome to Health Connect</h1>
                    <p>Get access to the best medical care and advice, right from your device.</p>
                </div>

                <div className={classes['my-image']}>
                    <img src={Doctor1} alt="doctor" />
                </div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Home;