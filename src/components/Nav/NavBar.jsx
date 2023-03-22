import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../services/auth-context';
import Heading from '../Heading/Heading';
import classes from './NavBar.module.css';

function NavBar() {

    const { profile } = useContext(AuthContext);

  return (
    <div className={classes['nav-position']}>
        <nav className={classes.content}>
            <div>
                <Heading>Health Connect</Heading>
            </div>
            <ul className={classes.navigation}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/appointments">Appointments</Link>
                </li>
                <li>
                    <Link to="/notification">Notification</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/contacts">Contact Us</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>

            {!profile && <div className={classes['account']}>
                <li>
                    <Link to="/login"><button className={classes['my-button']}>LogIn</button></Link> 
                </li>
                <li>
                    <Link to="/signup"><button className={classes['button2']}>Sign Up</button></Link>
                </li>
            </div>}

        </nav>
    </div>
  )
}

export default NavBar;