import React, { Component } from 'react';
import classes from  './App.css';
import PersonsList from '../components/PersonsList/PersonsList';
import Cockpit from '../components/Cockpit/Cockpit';

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

    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
          <PersonsList persons={this.state.persons}
                       clicked={this.deletePersonHandler}
                       changed={this.nameChangedHandler}/>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
                 persons={this.state.persons}
                 clicked={this.togglePersonsHandler}
                 title={this.props.appTitle} />
        {personsList}
      </div>
    );
  }
}
export default App;
