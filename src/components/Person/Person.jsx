import React from 'react';
import classes from './Person.module.css';

function Person() {
  return (
    <div>
        <div className={classes.person}>
            <div className={classes.circle}></div>
            <div className={classes.details}></div>
        </div>
    </div>
  )
}

export default Person