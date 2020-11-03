import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const btnRef = useRef();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        btnRef.current.click();
        // setTimeout(() => {
        //     alert('Saved data to somewhere');
        // }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup');
        };
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup 2nd useEffect');
        };
    })

    var assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>New line too</p>
            <button className={btnClass} onClick={props.clicked} ref={btnRef}>
                Switch view
            </button>
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer> */}
            {<button onClick={authContext.login}>Login</button>}
        </div>
    )
};

export default React.memo(cockpit);