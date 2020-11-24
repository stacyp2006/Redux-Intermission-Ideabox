import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';

const ToDoList = ({todos}) => {
  console.log(todos);

  return (
    <ul>
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.ToDoList
});

export default connect(mapStateToProps)(ToDoList);
