import React, { Component } from 'react';
import Todo from './Todo';
import NewForm from './NewForm'

class App extends Component {
  state = {
    todos: [
      {id: 1, item: 'Play badminton' },
      {id: 2, item: 'Watch series' }
    ]
  }

deleteTodo = (id) => {
  //console.log(id)
  let todos = this.state.todos.filter( todo => {
    return todo.id !==id
  })
  this.setState({
    todos: todos
  })
}
2
addTodo = (task) => {
  task.id = Math.random();
  let todos = [...this.state.todos, task];
  this.setState({
    todos: todos
  })
}

  render() {
    return (
      <div className="App container">
        <h3 className="center red-text"><b>My TODO's</b></h3>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <NewForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
