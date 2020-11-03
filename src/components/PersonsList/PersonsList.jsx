import React, { PureComponent } from 'react';

import Person from './Person/Person';

// const personsList = (props) => {
class PersonsList extends PureComponent {

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

    render() {
        console.log('[PersonList.js] render');
        return this.props.persons.map((e, idx) => {
            return <Person name={e.name}
                age={e.age}
                key={e.id}
                changed={(event) => this.props.changed(event, e.id)}
                click={() => this.props.clicked(idx)}
                isAuth={this.props.isAuthenticated} />
        });
    }

}

export default PersonsList;