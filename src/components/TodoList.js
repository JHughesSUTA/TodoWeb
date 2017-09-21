import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return <div>TODO: Render Todo items</div>
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
   getTodos:   PropTypes.func.isRequired,
}

export default TodoList
