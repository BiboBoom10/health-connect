import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import classes from './WaitingList.module.css';

function WaitingList() {

    // Initialize an empty array to store the waiting list
    const [waitingList, setWaitingList] = useState([]);

    // Function to add a new patient to the waiting list
    const addPatient = (patient) => {
        setWaitingList([...waitingList, patient]);
    };

    const waitingListData = [
        {
          name: "John Doe",
          dob: "1990-05-15",
          gender: "Male",
          contactNumber: "+1 (555) 555-5555",
          email: "johndoe@example.com",
          address: "123 Main St, Anytown USA",
          time: "10:30am",
          date: "2023-03-17",
          insurance: "Blue Cross Blue Shield",
          notes: "Patient has a history of allergies",
          reason: "Annual checkup"
        },
        {
          name: "Jane Smith",
          dob: "1985-08-22",
          gender: "Female",
          contactNumber: "+1 (555) 123-4567",
          email: "janesmith@example.com",
          address: "456 Oak St, Anytown USA",
          time: "11:00am",
          date: "2023-03-18",
          insurance: "Aetna",
          notes: "Allergic to penicillin",
          reason: "Flu symptoms"
        },
        {
          name: "Bob Johnson",
          dob: "1973-02-28",
          gender: "Male",
          contactNumber: "+1 (555) 987-6543",
          email: "bjohnson@example.com",
          address: "789 Elm St, Anytown USA",
          time: "1:30pm",
          date: "2023-03-18",
          insurance: "Cigna",
          notes: "No known allergies",
          reason: "Blood pressure check"
        }
      ];

  return (
    <div>

        <div>
          <Dashboard />
        </div>

        <div className={classes.page}>

        

        <h2>Waiting List</h2>

        
            {waitingListData.map((patient) => (
            <li key={patient.id} className={classes.content}>
                <div>
                    <strong>{patient.name}</strong>
                    <p> <span className={classes.bold}>Date of Birth:</span>  {patient.dob}</p>
                    <p> <span className={classes.bold}>Contact:</span>  {patient.contactNumber}</p>
                    <p> <span className={classes.bold}>Email:</span>  {patient.email}</p>
                    <p> <span className={classes.bold}>Address:</span>  {patient.address}</p>
                </div>
                
                <div>
                    <p> <span className={classes.bold}>Time:</span>  {patient.time}</p>
                    <p> <span className={classes.bold}>Date:</span>  {patient.date}</p>
                    <p> <span className={classes.bold}>Insurance:</span>  {patient.insurance}</p>
                    <p> <span className={classes.bold}>Notes:</span>  {patient.notes}</p>
                    <p> <span className={classes.bold}>Reason:</span>  {patient.reason}</p>
                </div>
               
            </li>
            ))}
       </div>
    </div>
  )
}

export default WaitingList;