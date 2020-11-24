import React from 'react';
import { completeTodo } from '../actions';
import { connect } from 'react-redux';

const ToDo = ({ id, todo, completed, completeTodo }) => {
  return (
    <li
      className={completed ? 'completed' : 'not-completed'}
      onClick={() => completeTodo(id)}
    >
    {todo}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  completeTodo : id => dispatch( completeTodo(id))
})

export default connect(null, mapDispatchToProps)(ToDo);
