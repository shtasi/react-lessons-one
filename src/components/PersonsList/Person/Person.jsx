import React, { Component } from 'react';
import classes from './Person.css';

// const person = (props) => {
class Person extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate');
    }

    render() {
        console.log('[Person.js] render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>New Person named {this.props.name} of {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

// export default person;
export default Person;