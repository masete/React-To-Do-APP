import React, { Component }  from 'react';
import './App.css';
//eslint-disable-next-line
import Todos from './components/Todos'




class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id:3,
        title: 'Meeting with lead',
        completed: false
      }
    ]
  }

  markComplete = (id) =>{
    console.log(id)
  }
  render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
    </div>
  );
}}

export default App;
