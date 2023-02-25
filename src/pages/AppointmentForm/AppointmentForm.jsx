import React, { useState } from 'react';
import classes from './AppointmentForm.module.css';

function AppointmentForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label>
                Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>

            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>

            <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AppointmentForm;