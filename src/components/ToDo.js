import React from 'react';
import { completeTodo } from '../actions';
import { connect } from 'react-redux';

const ToDo = ({ id, todo, completed }) => {
  return (
    <li>{todo}</li>
  )
}

export default connect(null, mapDispatchToProps)(ToDo);
