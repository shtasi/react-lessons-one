import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Иван', age: 21},
      {name: 'Петр', age: 23},
      {name: 'Семен', age: 35}
    ],
    showPersons: true
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 121},
        {name: 'Петр', age: 123},
        {name: 'Семен', age: 135}
      ]  
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Иван', age: 121},
        {name: event.target.value, age: 123},
        {name: 'Семен', age: 135}
      ]  
    });
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
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
            Hobby: chess
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
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
