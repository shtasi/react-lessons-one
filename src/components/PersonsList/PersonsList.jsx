import React, { PureComponent } from 'react';

import Person from './Person/Person';

// const personsList = (props) => {
class PersonsList extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[PersonsList.js] getDerivedStateFromProps', props);
    //     return state;
    //   }

    // componentWillReceiveProps(props) {
    //     console.log('[PersonsList.js] componentWillReceiveProps');
    //     return true;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[PersonsList.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

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

    componentWillUnmount() {
        console.log('[PersonsList.js] componentWillUnmount');
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