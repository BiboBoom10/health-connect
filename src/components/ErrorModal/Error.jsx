import React from 'react';
import classes from './Error.module.css';
import Button from '../../components/Button/Button';


function Error(props) {
  return (
    <div>
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
        <div className={classes.modal}>
            <header className={classes.header}>
                <h3>{props.title}</h3>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
    </div>
  )
}

export default Error;