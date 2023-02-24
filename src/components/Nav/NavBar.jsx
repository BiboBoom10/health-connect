import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';
import classes from './NavBar.module.css';

function NavBar() {
  return (
    <div className={classes['nav-position']}>
        <nav className={classes.content}>
            <div>
                <Heading>Health Connect</Heading>
            </div>
            <ul className={classes.navigation}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/appointments">Appointments</Link>
                </li>
                <li>
                    <Link to="/medical-records">Medical Records</Link>
                </li>
                <li>
                    <Link to="/prescriptions">Prescriptions</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>

            <div className={classes['account']}>
                <li>
                    <button className={classes['my-button']}><Link to="/signin">LogIn</Link></button> 
                </li>
                <li>
                    <button className={classes['button2']}> <Link to="/signup">Sign Up</Link></button>
                </li>
            </div>

        </nav>
    </div>
  )
}

export default NavBar;