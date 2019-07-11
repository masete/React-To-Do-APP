import React, { Component }  from 'react';
import uuid from 'uuid';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header'




class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id:uuid.v4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id:uuid.v4(),
        title: 'Meeting with lead',
        completed: false
      }
    ]
  }

  //mark complete
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id ===id){
        todo.completed = !todo.completed
      }
      return todo;
      }) });
  }

//del todo
  delTodo = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]})
  }

//add to do
  addTodo = (title) =>{
    const newtodo= {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newtodo]})
  }

  render(){
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
  );
}}

export default App;
