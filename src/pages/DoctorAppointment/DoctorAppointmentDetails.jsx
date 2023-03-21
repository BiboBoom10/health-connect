import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import classes from './DoctorAppointmentDetails.module.css';

function DoctorAppointmentDetails() {

    // const [appointment, setAppointment] = useState({});
    // const [patient, setPatient] = useState({});

    const DUMMT_PATIENTS = [
        {
        name: 'John Smith',
        dob: '1990-01-01',
        gender: 'Male',
        contact: '123-456-7890',
        email: 'john.smith@gmail.com',
        address: '123 Main St, Anytown, USA',
        time: '10:00 AM',
        date: '2022-04-01',
        insurance: 'ABC Insurance',
        notes: 'No known allergies',
        reason: 'Annual check-up'
      },
      {
        name: 'Jane Doe',
        dob: '1985-05-15',
        gender: 'Female',
        contact: '555-555-1212',
        email: 'jane.doe@yahoo.com',
        address: '456 Oak Ave, Anytown, USA',
        time: '2:30 PM',
        date: '2022-04-03',
        insurance: 'XYZ Insurance',
        notes: 'Allergic to penicillin',
        reason: 'Sore throat'
      },
      {
        name: 'Bob Johnson',
        dob: '1978-11-30',
        gender: 'Male',
        contact: '555-123-4567',
        email: 'bob.johnson@hotmail.com',
        address: '789 Pine St, Anytown, USA',
        time: '9:00 AM',
        date: '2022-04-05',
        insurance: '123 Insurance',
        notes: 'Has high blood pressure',
        reason: 'Annual physical'
      }
    ];

  return (
    <div >

        <div>
          <Dashboard />
        </div>

        <div className={classes.page}>

        
        <h2>Appointment Details</h2>

        {DUMMT_PATIENTS.map((patient) => (
            <li className={classes.content}>

                <div>
                    <p> <span className={classes.bold}>Patient Name:</span> {patient.name}</p>
                    <p> <span className={classes.bold}>Date of Birth:</span> {patient.date}</p>
                    <p> <span className={classes.bold}>Patient Gender:</span> {patient.gender}</p>
                    <p> <span className={classes.bold}>Patient Contact Number:</span> {patient.contact}</p>
                    <p> <span className={classes.bold}>Patient Email:</span> {patient.email}</p>
                    <p> <span className={classes.bold}>Patient Address:</span> {patient.address}</p>
                </div>
              
                <div>
                    <p> <span className={classes.bold}>Time:</span> {patient.time}</p>
                    <p> <span className={classes.bold}>Date:</span> {patient.date}</p> 
                    <p> <span className={classes.bold}>Insurance Company:</span> {patient.insurance}</p>
                    <p> <span className={classes.bold}>Additional Notes:</span> {patient.notes}</p>
                    <p> <span className={classes.bold}>Reason for Appointment:</span> {patient.reason}</p>
                </div>
                
            </li>
        ))}
    </div>
        
        
    </div>
  )
}

export default DoctorAppointmentDetails;