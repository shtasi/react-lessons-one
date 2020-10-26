import React, { Component } from 'react';

import Person from './Person/Person';

// const personsList = (props) => {
class PersonsList extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[PersonsList.js] getDerivedStateFromProps', props);
    //     return state;
    //   }

    // componentWillReceiveProps(props) {
    //     console.log('[PersonsList.js] componentWillReceiveProps');
    //     return true;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[PersonsList.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonsList.js] getSnapshotBeforeUpdate');
        return null;
    }

    // componentWillUpdate() {
    //     console.log('[PersonsList.js] componentWillUpdate');
    // }

    componentDidUpdate() {
        console.log('[PersonsList.js] componentDidUpdate');
    }
    
    render() {
        console.log('[PersonList.js] render');
        return this.props.persons.map((e, idx) => {
            return <Person name={e.name}
                age={e.age}
                key={e.id}
                changed={(event) => this.props.changed(event, e.id)}
                click={() => this.props.clicked(idx)} />
        });
    }

}

export default PersonsList;