import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    var assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>New line too</p>
            <button className={btnClass} onClick={props.clicked}>
                Switch view
            </button>
        </div>
    )
};

export default cockpit;