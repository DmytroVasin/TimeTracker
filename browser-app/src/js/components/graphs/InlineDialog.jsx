import React, { Component } from 'react'

import { ListOfTasks } from './ListOfTasks'

export class InlineDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      task: { time: '', comment: '' }
    }
  }

  handleTimeChange = (event) => {
    this.updateTask('time', event.target.value)
  }

  handleCommentChange = (event) => {
    this.updateTask('comment', event.target.value)
  }

  updateTask (field, value) {
    this.setState({
      task: {
        ...this.state.task,
        [field]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let task = this.state.task

    if (task.time && task.comment) {
      this.props.createTask(this.props.graphDialog.storyId, task)

      this.setState({error: '', task: { time: '', comment: ''}})
    } else {
      this.setState({error: 'Fill in values.'})
    }
  }

  hideDialog = () => {
    this.props.hideDialog()
  }

  handleNotCloseDialog = (e) => {
    e.stopPropagation()
  }

  deleteTask = (taskId) => {
    this.props.deleteTask(this.props.graphDialog.storyId, taskId)
  }

  render() {
    const { show, taskList, coordinates } = this.props.graphDialog

    if (!show || taskList.loading) {
      return null
    }

    let dialogStyle = {
      top: coordinates.positionTop,
      right: coordinates.positionRight
    };

    return (
      <div className='inlineDialogWrapper' onClick={this.hideDialog} >
        <div className='inlineDialog' onClick={this.handleNotCloseDialog} style={dialogStyle} >

          <ListOfTasks taskList={taskList} deleteTask={this.deleteTask.bind(this)} />

          <form onSubmit={this.handleSubmit}>
            <div className='timeTitle'>Log Work for 08/Jul/16</div>

            <div className='input-row'>
              <div className='input-row-title'>Spent:</div>
              <div className='new-story-input'>
                <input value={this.state.task.time} onChange={this.handleTimeChange} />
              </div>
            </div>

            <div className='input-row'>
              <div className='input-row-title'>Comment:</div>
              <div className='new-story-input'>
                <input value={this.state.task.comment} onChange={this.handleCommentChange} />
              </div>
            </div>

            <button type='submit' className='hidden'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
