import React, { useState } from 'react';
import TaskInput from '../components/TaskInput';
import Todo from '../components/Todo';
import '../App.css';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (name, priority) => {
    const newTodos = [...todos, { name, priority }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  todos.sort((a, b) => {
    return a.priority - b.priority
  })

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={item}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </div>
      <TaskInput
        addTodo={addTodo}
      />
    </div>
  )
}

export default Home;
