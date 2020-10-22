import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    const personId = this.state.persons.findIndex(e => {
      return e.userId === id
    });
    const person = {...this.state.persons[personId]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // let persons = null;
    let btnClass = [classes.Button];

    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
        <div>
          {this.state.persons.map((e, idx) => {
            return <ErrorBoundary key={e.id}>
                      <Person name={e.name}
                           age={e.age}
                           changed={(event) => this.nameChangedHandler(event, e.id)}
                           click={() => this.deletePersonHandler(idx)} />
                    </ErrorBoundary>
          })}
      </div>
      );
      btnClass.push(classes.Red);
    }

    var assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>My own React app!</h1>
        <p className={assignedClasses.join(' ')}>New line too</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
          Switch view
        </button>
        {personsList}
      </div>
    );
  }
}
export default App;
