import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityIndicator from '../../components/ActivitiyIndicator/ActivityIndicator';
import Error from '../../components/ErrorModal/Error';
import NavBar from '../../components/Nav/NavBar';
import { AuthContext } from '../../services/auth-context';
import classes from './AppointmentForm.module.css';

function AppointmentForm() {

    const { book, profile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [patientName, setPatientName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [reasonForAppointment, setReasonForAppointment] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [preferredPhysician, setPreferredPhysician] = useState('');
    const [insuranceCompany, setInsuranceCompany] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
      };

    const submitHandler = async (event) => {
        event.preventDefault();
        const form = { patientName, dob, gender, contactNumber, email, address, reasonForAppointment, preferredDate, preferredTime, physician: preferredPhysician, insuranceCompany, additionalNotes, user: profile?._id };
        setIsLoading(true);
        try {
            await book(form);
            navigate('/home');
        } catch (err) {
            const errMessage = err?.response?.data?.content || err?.response?.data?.message || err?.message;
            setError({ title : "Error", message: errMessage });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if(!profile) navigate('/login')
        //eslint-disable-next-line
    }, [])

  return (
    <div>

        <NavBar />
        { error && <Error title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <h1 className={classes.heading}>Booking Appointment Form</h1>
        
        <div className={classes.content}>
            
            <form className={classes['form-data']} onSubmit={submitHandler}>
                <div className={classes.both}>
                    <div>
                        <label htmlFor="patientName">Patient's Name:
                            <input
                                type="text"
                                id="patientName"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                            />
                        </label>

                        <label  htmlFor="dob">Date of Birth:
                            <input
                                className={classes.dob}
                                type="date"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </label>

                        <label htmlFor="gender">Gender:
                            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="">--Please select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>

                        <label htmlFor="contactNumber">Contact Number:
                            <input
                                type="text"
                                id="contactNumber"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                        </label>

                        <label htmlFor="email">Email:
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="address">Address:
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                    </div>
                
                    <div>
                        <label htmlFor="reasonForAppointment">Reason for Appointment:
                            <input
                                type="text"
                                id="reasonForAppointment"
                                value={reasonForAppointment}
                                onChange={(e) => setReasonForAppointment(e.target.value)}
                            />
                        </label>

                        <label htmlFor="preferredDate">Preferred Date:
                            <input
                                type="date"
                                id="preferredDate"
                                value={preferredDate}
                                onChange={(e) => setPreferredDate(e.target.value)}
                            />
                        </label>

                        <label htmlFor="preferredTime">Preferred Time:
                            <input
                                type="time"
                                id="preferredTime"
                                value={preferredTime}
                                onChange={(e) => setPreferredTime(e.target.value)}
                            />
                        </label>

                        <label htmlFor="preferredPhysician">Physician:
                            <select id="preferredPhysician" value={preferredPhysician} onChange={(e) => setPreferredPhysician(e.target.value)}>
                                <option value="">--Please select--</option>
                                <option value="generalpractitioner">General Practitioner</option>
                                <option value="pediatrician">Pediatrician</option>
                                <option value="gynecologistr">Gynecologist</option>
                                <option value="neurologist">Neurologist</option>'
                                <option value="dermatologist">Dermatologist</option>
                                <option value="other">Other</option>
                            </select>
                        </label>

                        <label htmlFor="preferredCompany">InsuaranceCompany:
                            <select id="preferredCompany" value={insuranceCompany} onChange={(e) => setInsuranceCompany(e.target.value)}>
                                <option value="">--Please select--</option>
                                <option value="APA">APA</option>
                                <option value="NHIF">NHIF</option>
                                <option value="Jubilee">Jubilee</option>
                                <option value="other">Other</option>
                            </select>
                        </label>

                        <label htmlFor="preferredCompany">Additional Notes:
                            <input
                                type="textbox"
                                id="additionalNotes"
                                value={additionalNotes}
                                onChange={(e) => setAdditionalNotes(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                {isLoading && <ActivityIndicator />}
                {!isLoading && <button className={classes['my-button']} type="submit">Submit</button>}


            </form>
        </div>
    </div>
  )
}

export default AppointmentForm;