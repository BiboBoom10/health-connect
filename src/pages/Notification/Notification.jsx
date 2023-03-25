import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityIndicator from '../../components/ActivitiyIndicator/ActivityIndicator';
import NavBar from '../../components/Nav/NavBar';
import { AuthContext } from '../../services/auth-context';
import classes from './Notification.module.css';

function Notification() {

  const { profile, userBooking } = useContext(AuthContext);
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initialization = async() => {
    if (!profile) return navigate('/login');
    try {
      setIsLoading(true);
      const data = await userBooking();
      setBookings(data.bookings);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initialization();
    //eslint-disable-next-line
  }, [])

  return (
    <div>

        <NavBar />

        <div className={classes.content}>
            <h1>Notification</h1>
            {isLoading && <ActivityIndicator />}
            {!isLoading && bookings.length > 0 && bookings.map((each, index) => <div key={index} className={classes['person-details']} >
                <p className={classes.data}>{each.patientName}</p>
                <p className={classes.notify}>{each.status}</p>
            </div>)}
            {!isLoading && bookings.length === 0 && <p>Book an appointment and your will view them here</p>}

        </div>

    </div>
  )
}

export default Notification