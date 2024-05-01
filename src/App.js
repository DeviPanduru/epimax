import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



class TaskListInterface extends Component {
  state = {
    taskName: '',
    taskDescription: '',
    dueDate: '',
    assignee: '',
    error: ''
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { taskName, taskDescription, dueDate, assignee } = this.state;

    if (!taskName || !taskDescription || !dueDate || !assignee) {
      this.setState({ error: 'Please fill in all fields' });
      return;
    }

    
    
    this.setState({
      taskName: '',
      taskDescription: '',
      dueDate: '',
      assignee: '',
      error: ''
    });
  };

  render() {
    const { taskName, taskDescription, dueDate, assignee, error } = this.state;

    return (
      <div className='task-section'>
      <form d-flex flex-column text-center justify-content-center onSubmit={this.handleFormSubmit}>
        <input type="text" name="taskName" placeholder="Task Name" value={taskName} onChange={this.handleInputChange} /><br />
        <textarea name="taskDescription" placeholder="Task Description" value={taskDescription} onChange={this.handleInputChange}></textarea><br />
        <input type="date" name="dueDate" value={dueDate} onChange={this.handleInputChange} /><br />
        <input type="text" name="assignee" placeholder="Assignee" value={assignee} onChange={this.handleInputChange} /><br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button className='btn btn-primary' type="submit">Add Task</button>
      </form>
      </div>
    );
  }
}

export default TaskListInterface;

