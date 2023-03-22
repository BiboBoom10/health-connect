import React from 'react';
import NavBar from '../../components/Nav/NavBar';
import classes from './Notification.module.css';

function Notification() {
  return (
    <div>

        <NavBar />

        <div className={classes.content}>
            <h1>Notification</h1>


            <div className={classes['person-details']} >
                <p className={classes.data}>Person A Details</p>
                <p className={classes.notify}>Accepted</p>
            </div>

            <div className={classes['person-details']} >
                <p className={classes.data}>Person B Details</p>
                <p className={classes.notify}>Rejected</p>
            </div>

        </div>

    </div>
  )
}

export default Notification