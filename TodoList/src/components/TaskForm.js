import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            input : ""
        }
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitTask = this.submitTask.bind(this);
      }
      inputUpdated(e){
          const input = e.target.value;
          this.setState({input});

      }

      submitTask(e){
          e.preventDefault;
          const {input} = this.state;
          const {addTask} = this.props;
          addTask(input);
          this.setState({input:""});
      }

      render(){

        return(
            <form onSubmit= {this.submitTask} className="row input-area">
              <div className="col-md-1"></div>
              <div className="form-group col-md-9">
                <input onInput = {this.inputUpdated} type="input" placeholder="New Task" className="form-control" id="addTask"
                name = "taskInput" value = {this.state.input} required />
              </div>
              <div className="form-group col-md-1">
                <button type = "submit" className="btn btn-primary">Add</button>
              </div>
              <div className="col-md-1"></div>
            </form>
        )
      }

} //end of class

export default TaskForm;