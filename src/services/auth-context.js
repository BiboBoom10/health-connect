import { createContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext({
    profile: false,
    acceptBooking: () => {},
    book: (form) => {},
    doctorLogin: (form) => {},
    doctorSignup: (form) => {},
    login: (form) => {},
    pendingAppointments: () => {},
    rejectBooking: () => {},
    signup: (form) => {},
    setProfile: (data) => {},
    userBooking: () => {},
});

const AuthContextProvider = (props) => {
    const [profile, setProfile] = useState();

    const login = async (form) => {
        try {
            const { data } = await axios.post('http://localhost:8000/auth/login', form);
            setProfile({ ...data.user, isDoc: false });
        } catch (err) {
            throw err;
        }
    }

    const signup = async (form) => {
        try {
            const { data } = await axios.post('http://localhost:8000/auth/signup', form);
            setProfile({ ...data.user, isDoc: false });
        } catch (err) {
            throw err;
        }
    }

    const doctorSignup = async (form) => {
        try {
            const { data } = await axios.post('http://localhost:8000/auth/doctor-register', form);
            setProfile({ ...data.doctor, isDoc: true });
        } catch (err) {
            throw err;
        }
    }

    const doctorLogin = async (form) => {
        try {
            const { data } = await axios.post('http://localhost:8000/auth/doctor-login', form);
            setProfile({ ...data.doctor, isDoc: true });
        } catch (err) {
            throw err;
        }
    };

    const book = async (form) => {
        try {
            await axios.post('http://localhost:8000/auth/booking', form);
        } catch (err) {
            throw err;
        }
    };

    const userBooking = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/auth/user-bookings/' + profile._id);
            return data;
        } catch (err) {
            throw err;
        }
    };

    const pendingAppointments = async () => {
        try {
            const {data} = await axios.get('http://localhost:8000/auth/pending-appointments');
            return data;
        } catch (err) {
            throw err;
        }
    };

    const acceptBooking = async (id) => {
        try {
            await axios.patch('http://localhost:8000/auth/accept/' + id);
        } catch (err) {
            throw err;
        }
    }

    const rejectBooking = async (id) => {
        try {
            await axios.patch('http://localhost:8000/auth/reject/' + id);
        } catch (err) {
            throw err;
        }
    }

    const value = {
        acceptBooking,
        book,
        doctorLogin,
        doctorSignup,
        login,
        pendingAppointments,
        profile,
        rejectBooking,
        setProfile,
        signup,
        userBooking,
    };
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
};

export default AuthContextProvider