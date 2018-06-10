import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
        super(props);
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    }

    onDeleteTask(e){
        e.preventDefault;
        const {deleteTask} = this.props;
        const {index} = this.props;
        deleteTask(index);

    }
    toggleTaskStatus(e){
        const {toggleTaskStatus} = this.props;
        const {index} = this.props;
        toggleTaskStatus(index);
    }


      render()
      {
          const {toggleTaskStatus} = this.props;
          const {onDeleteTask} = this.onDeleteTask;
          const {task} = this.props;
          const {index} = this.props;
          //cosnt {taskClick} = this.props;
          let complete = task.isComplete ? "complete" : "";
          let checked = task.isComplete ? "checked" : "";

          return (
            <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" onChange = {this.toggleTaskStatus} value=""/></label>
              </div>
              <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text">
                {task.task}
              </div>
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a className="" href="/" onClick = {this.onDeleteTask}><i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i></a>
              </div>
            </div>
          </li>

          );
      }

} //end of class

export default Task;