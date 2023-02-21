import React from 'react';
import classes from './Heading.module.css';

function Heading(props) {
  return (
    <div>
        <h1 className={classes.heading}>{props.children}</h1>
    </div>
  )
}

export default Heading;