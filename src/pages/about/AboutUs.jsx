import React from 'react';
import NavBar from '../../components/Nav/NavBar';
import classes from './AboutUs.module.css';
import Doctor4 from '../../Images/Doctor4.svg';

function AboutUs() {
  return (
    <div>

        <NavBar />

        <div className={classes.content}>
            <div className={classes['align-content']}>

                <div className={classes['align-image']}>
                    <img src={Doctor4} alt="nurses" className={classes.image}/>
                </div>

                <div className={classes['align-about']}>
                    <h1>About Us</h1>
                    <p>
                    At Our Health App, our mission is to make it easy for people to access high-quality healthcare from the comfort of their own homes.
                    We believe that everyone deserves access to the best medical care and advice,
                    regardless of their location 
                    </p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default AboutUs;