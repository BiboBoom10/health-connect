import { createContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext({
    profile: false,
    login: (form) => {},
    signup: (form) => {},
    setProfile: (data) => {}
});

const AuthContextProvider = (props) => {
    const [profile, setProfile] = useState();

    const login = async (form) => {
        try {
            const { data } = await axios.post('http://localhost/auth/login');
            setProfile(data.user);
        } catch (err) {
            throw err;
        }
    }

    const signup = async (form) => {
        try {
            const { data } = await axios.post('http://localhost/auth/signup');
            setProfile(data.user);
        } catch (err) {
            throw err;
        }
    }

    const value = {
        profile,
        setProfile
    };
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
};

export default AuthContextProvider