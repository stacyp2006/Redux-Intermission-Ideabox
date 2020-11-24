import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList';
import ToDo from './ToDo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList />
        <ToDo />
      </div>
    );
  }
}

export default App;
