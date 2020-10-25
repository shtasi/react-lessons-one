import React from 'react';

import Person from './Person/Person';

const personsList = (props) => 
    props.persons.map((e, idx) => {
        return <Person name={e.name}
                       age={e.age}
                       key={e.id}
                       changed={(event) => props.changed(event, e.id)}
                       click={() => props.clicked(idx)} />
      });

export default personsList;