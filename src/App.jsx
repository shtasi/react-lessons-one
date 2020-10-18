import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Иван', age: 21},
      {name: 'Петр', age: 23},
      {name: 'Семен', age: 35}
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Ivan', age: 21},
        {name: 'Петр', age: 23},
        {name: 'Семен', age: 35}
      ]  
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My own React app!</h1>
        <p>New line too</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobby: chess </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'New Method Creation'));
  }
}

export default App;
