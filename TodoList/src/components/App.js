import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    let savedTasks = JSON.parse(localStorage.getItem('TASKS'));   //pull any tasks from local storage
    //if there aren't any tasks saved, then use these default ones
    if (!savedTasks) {
      savedTasks = [
        { task: 'Go to Dentist', isComplete: false },
        { task: 'Do Gardening', isComplete: true },
        { task: 'Renew Library Account', isComplete: false },
      ];
    }

    this.state = {
      tasks: savedTasks,
      input: ""
    }

    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);

  }//end of constructor

  toggleTaskStatus(index) {
    let tasks = this.state.tasks;
    tasks[index].isComplete = !tasks[index].isComplete;
    this.setState({tasks, input: ""});
  }

  deleteTask(index) {
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({tasks, input: ""});

  }

  addTask(input) {
    let newTask = { task: input, isComplete: false };
    let tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({tasks, input: ""});

  }

  render() {
    localStorage.setItem('TASKS', JSON.stringify(this.state.tasks));
    return (
      <div className="container">
        <div className="content-area row">
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>

          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
            <h2>ToDo List</h2>

            <TaskForm addTask = {this.addTask}/>
            <TaskList tasks = {this.state.tasks} deleteTask = {this.deleteTask} toggleTaskStatus = {this.toggleTaskStatus}/>
          </div>

          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>
        </div>
      </div>
    );
  }

}//end of todo app.js class

export default App;
