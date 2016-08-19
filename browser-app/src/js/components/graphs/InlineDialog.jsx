import React, { Component } from 'react'

import { InlineDialogTasks } from './InlineDialogTasks'

export class InlineDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      task: { minutes: '', comment: '' }
    }
  }

  handleMinutesChange = (event) => {
    let numbersOnly = /[^0-9]+/g
    this.updateTask( 'minutes', event.target.value.replace(numbersOnly, '') )
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

    if (task.minutes && task.comment) {
      this.props.createTask(this.props.graphDialog.storyId, { ...task, task_date: this.props.graphDialog.dialogDate })

      this.setState({error: '', task: { minutes: '', comment: ''}})
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
    const { show, taskList, coordinates, dialogDate } = this.props.graphDialog

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

          <InlineDialogTasks taskList={taskList} deleteTask={this.deleteTask.bind(this)} />

          <form onSubmit={this.handleSubmit}>
            <div className='timeTitle'>Log Work for {dialogDate}</div>

            <div className='input-row'>
              <div className='input-row-title'>Spent:</div>
              <div className='new-story-input'>
                <input value={this.state.task.minutes} onChange={this.handleMinutesChange} />
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
