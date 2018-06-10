import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    }
    deleteTask(index){
        const {deleteTask} = this.props;
        deleteTask(index);
    }

    toggleTaskStatus(index){
        const {toggleTaskStatus} = this.props;
        toggleTaskStatus(index);
    }

    render() {
        const { tasks} = this.props

        return (
            <ul className="list-group" id="taskList">
                {tasks.map((task, index) =>
                    <Task
                        key = {task.task}
                        task={task}
                        index={index}
                        toggleTaskStatus={this.toggleTaskStatus}
                        deleteTask={this.deleteTask} />)}
            </ul>
        )
    }

} //end of class

export default TaskList;