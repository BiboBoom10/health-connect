import React from 'react';
import classes from './Contacts.module.css';
import Contact from '../../Images/Contacts.svg';
import NavBar from '../../components/Nav/NavBar';

function Contacts() {
  return (

    <div>

        <NavBar />

        <div className={classes['content-align']}>

            <div className={classes.content}>
                <div className={classes['image-align']}>
                    <img src={Contact} alt='contacts' />
                </div>

                <div>

                    <h1 className={classes.heading}>Contact Us</h1>

                    <div className={classes['my-text']}>
                        <p>If you have any questions or would like to learn more about Our Health App, 
                            please don't hesitate to get in touch with us. <br /> Here are the best ways to reach us:
                        </p>

                        <p>Phone: <span className={classes['text-2']}>+254704400735</span></p>
                        <p>Email: <span className={classes['text-3']}>bibokim6@gmail.com</span></p>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contacts;