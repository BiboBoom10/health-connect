import { createContext, useState } from "react";
import axios from 'axios';

const SERVER_URL = 'https://health-connect.onrender.com'

export const AuthContext = createContext({
    profile: false,
    openDrawer: false,
    setOpenDrawer: (bool) => {},
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
    const [openDrawer, setOpenDrawer] = useState(false)

    const login = async (form) => {
        try {
            const { data } = await axios.post(SERVER_URL + '/auth/login', form);
            setProfile({ ...data.user, isDoc: false });
        } catch (err) {
            throw err;
        }
    }

    const signup = async (form) => {
        try {
            const { data } = await axios.post(SERVER_URL + '/auth/signup', form);
            setProfile({ ...data.user, isDoc: false });
        } catch (err) {
            throw err;
        }
    }

    const doctorSignup = async (form) => {
        try {
            const { data } = await axios.post(SERVER_URL + '/auth/doctor-register', form);
            setProfile({ ...data.doctor, isDoc: true });
        } catch (err) {
            throw err;
        }
    }

    const doctorLogin = async (form) => {
        try {
            const { data } = await axios.post(SERVER_URL + '/auth/doctor-login', form);
            setProfile({ ...data.doctor, isDoc: true });
        } catch (err) {
            throw err;
        }
    };

    const book = async (form) => {
        try {
            await axios.post(SERVER_URL + '/auth/booking', form);
        } catch (err) {
            throw err;
        }
    };

    const userBooking = async () => {
        try {
            const { data } = await axios.get(SERVER_URL + '/auth/user-bookings/' + profile._id);
            return data;
        } catch (err) {
            throw err;
        }
    };

    const pendingAppointments = async () => {
        try {
            const {data} = await axios.get(SERVER_URL + '/auth/pending-appointments');
            return data;
        } catch (err) {
            throw err;
        }
    };

    const acceptBooking = async (id) => {
        try {
            await axios.patch(SERVER_URL + '/auth/accept/' + id);
        } catch (err) {
            throw err;
        }
    }

    const rejectBooking = async (id) => {
        try {
            await axios.patch(SERVER_URL + '/auth/reject/' + id);
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
        openDrawer,
        pendingAppointments,
        profile,
        rejectBooking,
        setOpenDrawer,
        setProfile,
        signup,
        userBooking,
    };
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
};

export default AuthContextProvider