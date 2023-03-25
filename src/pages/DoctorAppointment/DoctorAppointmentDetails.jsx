import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityIndicator from '../../components/ActivitiyIndicator/ActivityIndicator';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../services/auth-context';
import Dashboard from '../Dashboard/Dashboard';
import classes from './DoctorAppointmentDetails.module.css';

// const DUMMT_PATIENTS = [
//   {
//   name: 'John Smith',
//   dob: '1990-01-01',
//   gender: 'Male',
//   contact: '123-456-7890',
//   email: 'john.smith@gmail.com',
//   address: '123 Main St, Anytown, USA',
//   time: '10:00 AM',
//   date: '2022-04-01',
//   insurance: 'ABC Insurance',
//   notes: 'No known allergies',
//   reason: 'Annual check-up'
// },
// {
//   name: 'Jane Doe',
//   dob: '1985-05-15',
//   gender: 'Female',
//   contact: '555-555-1212',
//   email: 'jane.doe@yahoo.com',
//   address: '456 Oak Ave, Anytown, USA',
//   time: '2:30 PM',
//   date: '2022-04-03',
//   insurance: 'XYZ Insurance',
//   notes: 'Allergic to penicillin',
//   reason: 'Sore throat'
// },
// {
//   name: 'Bob Johnson',
//   dob: '1978-11-30',
//   gender: 'Male',
//   contact: '555-123-4567',
//   email: 'bob.johnson@hotmail.com',
//   address: '789 Pine St, Anytown, USA',
//   time: '9:00 AM',
//   date: '2022-04-05',
//   insurance: '123 Insurance',
//   notes: 'Has high blood pressure',
//   reason: 'Annual physical'
// }
// ];

function DoctorAppointmentDetails() {

    const { profile, pendingAppointments, acceptBooking, rejectBooking } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);

    const initialization = async () => {
      try {
        if (!profile || !profile.isDoc) return navigate('/login');
        const data = await pendingAppointments();
        setAppointments(data.bookings)
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      initialization();
      //eslint-disable-next-line
    }, []);

    const accept = async (id) => {
      try {
        await acceptBooking(id);
        setAppointments(prev => prev.filter(e => e._id !== id));
      } catch (err) {
        console.log(err);
      }
    }

    const reject = async (id) => {
      try {
        await rejectBooking(id);
        setAppointments(prev => prev.filter(e => e._id !== id));
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <div >

        <div>
          <Dashboard />
        </div>

        <div className={classes.page}>

        
        <h2>Appointment Details</h2>

        {isLoading && <ActivityIndicator />}

        {!isLoading && appointments.map((patient) => (
          <div className={classes.topDiv}>
            <li className={classes.content}>

                <div>
                    <p> <span className={classes.bold}>Patient Name:</span> {patient.patientName}</p>
                    <p> <span className={classes.bold}>Patient Contact Number:</span> {patient.contactNumber}</p>
                    <p> <span className={classes.bold}>Patient Email:</span> {patient.email}</p>
                    <p> <span className={classes.bold}>Patient Address:</span> {patient.address}</p>
                </div>
              
                <div>
                    <p> <span className={classes.bold}>Time:</span> {patient.preferredTime}</p>
                    <p> <span className={classes.bold}>Date:</span> {patient.preferredDate}</p> 
                    <p> <span className={classes.bold}>Insurance Company:</span> {patient.insuranceCompany}</p>
                    <p> <span className={classes.bold}>Additional Notes:</span> {patient.additionalNotes}</p>
                    <p> <span className={classes.bold}>Reason for Appointment:</span> {patient.reasonForAppointment}</p>
                </div>
                
            </li>
            <div className={classes.buttons}>
              <Button onClick={() => { accept(patient._id) }}>Accept</Button>
              <Button onClick={() => { reject(patient._id) }}>Reject</Button>
            </div>
          </div>
        ))}
    </div>
        
        
    </div>
  )
}

export default DoctorAppointmentDetails;