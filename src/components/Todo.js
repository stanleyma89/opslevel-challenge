import React from 'react';
import "../App.css"

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="column-width">
        {todo.name}
      </div>
      <div>
        Priority: {todo.priority}
      </div>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  )
}

export default Todo;
