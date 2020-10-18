import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>New Person named {props.name} of {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;