import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

import AuthContext from '../../../context/auth-context';

// const person = (props) => {
class Person extends Component {

    constructor() {
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    };

    render() {
        console.log('[Person.js] render');
        // return (
        //     <div className={classes.Person}>
        //         <p onClick={this.props.click}>New Person named {this.props.name} of {this.props.age} years old</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // );
        // return [
        //         <p key="i1" onClick={this.props.click}>New Person named {this.props.name} of {this.props.age} years old</p>,
        //         <p key="i2">{this.props.children}</p>,
        //         <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ];
        return (
            <Fragment>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : null}
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated</p> : null}
                <p onClick={this.props.click}>New Person named {this.props.name} of {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text"
                        onChange={this.props.changed}
                        value={this.props.name} 
                        //ref={(inputEl) => {this.inputElement = inputEl}} 
                        ref={this.inputElementRef}
                />
            </Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

// export default person;
export default withClass(Person, classes.Person);