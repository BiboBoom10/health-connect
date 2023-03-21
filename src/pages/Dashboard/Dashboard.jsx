import React from 'react';
import classes from './Dashboard.module.css';
import Doctor5 from '../../Images/Doctor5.svg';
import DoctorAppointmentDetails from '../DoctorAppointment/DoctorAppointmentDetails';

function Dashboard() {
  return (
    <div className={classes.content}>

        <div className={classes.left}>
            <div>
                <img src = { Doctor5 } alt="" />
                <h1>Health Connect</h1>
            </div>
            
            <div>
                <ul>
                    <li>Patient Management</li>
                    <li>Waiting List</li>
                    <li>Rejected Appointments</li>
                </ul>
            </div>

        </div>

        {/* <div className={classes['right']}>
            <h1>Welcome to <span>Health Connect</span> </h1>
            <p>Innovative care for a better tomorrow</p>
            
        </div> */}
        
    </div>
  )
}

export default Dashboard;