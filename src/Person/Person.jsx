import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
width: 60%;
margin: auto;
border: 1px solid #ddd;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
margin-bottom: 16px;
text-align: center;

@media (min-width: 500px) {
width: 450px;
}`;

const person = (props) => {
    // const pStyle = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        // <div className="Person" style={pStyle}>
        <StyledDiv>
            <p onClick={props.click}>New Person named {props.name} of {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        {/* </div> */}
        </StyledDiv>
    )
}

// export default Radium(person);
export default person;