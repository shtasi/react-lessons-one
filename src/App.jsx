import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Иван', age: 21},
      {id: 2, name: 'Петр', age: 23},
      {id: 3, name: 'Семен', age: 35}
    ],
    showPersons: true
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {
    const personId = this.state.persons.findIndex(e => e.id === id);
    const person = {...this.state.persons[personId]};
    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // const btnStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   marginBottom: '12px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',  
    //   }
    // };

    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
        <div>
          {this.state.persons.map((e, idx) => {
            return <Person name={e.name}
                           age={e.age}
                           key={e.id}
                           changed={(event) => this.nameChangedHandler(event, e.id)}
                           click={() => this.deletePersonHandler(idx)} />
          })}
      </div>
      );
      // btnStyle.backgroundColor = 'red';
      // btnStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',  
      // };
    }

    var classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>My own React app!</h1>
        <p className={classes.join(' ')}>New line too</p>
        <button onClick={this.togglePersonsHandler}>
          Switch view
        </button>
        {personsList}
      </div>
    );
  }
}
export default App;
