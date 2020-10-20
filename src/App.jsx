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
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

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
      );}

    return (
      <div className="App">
        <h1>My own React app!</h1>
        <p>New line too</p>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>
          Switch view
        </button>
        {personsList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'New Method Creation'));
  }
}

export default App;
