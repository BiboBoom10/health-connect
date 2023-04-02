import React, { useContext } from 'react';
import NavBar from '../../components/Nav/NavBar';
import classes from './Home.module.css';
import Doctor1 from '../../Images/Doctor3.svg';
import { Link } from 'react-router-dom';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import Faqs from '../Faqs/Faqs';
import { AuthContext } from '../../services/auth-context';

function Home() {

    const { setOpenDrawer } = useContext(AuthContext);

  return (
    <div>
        <NavBar />
        <p className={classes.hide} onClick={() => { setOpenDrawer(true) }}>Hamburger</p>

        <div className={classes.home}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <h1>Welcome to Health Connect</h1>
                    <p>Get access to the best medical care and advice, right from your device.</p>
                    <Link to="/appointments"><button className={classes['button-1']} type='submit'> Book Appointment Now </button> </Link> 
                    <p></p>
                </div>

                <div className={classes['my-image']}>
                    <img src={Doctor1} alt="doctor" />
                </div>
            </div>
            
        </div>

        {/* <div className={classes['box-align']}>
            <div className={classes.box}>

            </div>
        </div> */}

        {/* <Faqs /> */}

        <footer className={classes['my-footer']}>
            <span>
                <h2>Health Connect</h2>
            </span>
            <span className={classes['footer-links']}>
                <Link to="/about-us" className={classes.link}><p>About Us</p></Link>
                <Link to="/contacts" className={classes.link}><p>Contact Us</p></Link> 
                <p> <FaRegCopyright className={classes.rights}/> 2023 All Rights Reserved</p>
            </span>
            <span>
                <FiTwitter className={classes.icons}/>
                <FaInstagram className={classes.icons}/>
                <FiFacebook className={classes.icons}/>
            </span>
        </footer>
        
       
    </div>
  )
}

export default Home;