import React, { Component } from 'react'

import { InlineDialogTasks } from './InlineDialogTasks'

export class InlineDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {minutes: '', comment: ''}
    }
  }

  handleMinutesChange = (event) => {
    this.updateTask('minutes', event.target.value.replace(/[^0-9]+/g, ''))
  }

  handleCommentChange = (event) => {
    this.updateTask('comment', event.target.value)
  }

  updateTask (field, value) {
    this.setState({ task: {...this.state.task, [field]: value} })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let task = this.state.task

    if (task.minutes && task.comment) {
      this.props.createTask(this.props.graphDialog.storyId, { ...task, task_date: this.props.graphDialog.dialogDate })

      this.setState({task: { minutes: '', comment: ''}})
    }
  }

  hideDialog = () => {
    this.props.hideDialog()
  }

  handleNotCloseDialog = (e) => {
    e.stopPropagation()
  }

  render() {
    const { show, tasksList, coordinates, dialogDate } = this.props.graphDialog

    if (!show) return null

    let dialogStyle = {
      top: coordinates.positionTop,
      right: coordinates.positionRight
    }

    return (
      <div className='inline-dialog-container' onClick={this.hideDialog} >
        <div className='inline-dialog' onClick={this.handleNotCloseDialog} style={dialogStyle} >

          <InlineDialogTasks tasksList={tasksList} storyId={this.props.graphDialog.storyId} deleteTask={this.props.deleteTask} />

          <form onSubmit={this.handleSubmit} className='dialog-form' >
            <div className='dialog-form-title'>Log Work for {dialogDate}</div>

            <div className='input-row'>
              <div className='input-row-title'>Spent:</div>
              <div className='input-row-input'>
                <input value={this.state.task.minutes} onChange={this.handleMinutesChange} />
              </div>
            </div>

            <div className='input-row'>
              <div className='input-row-title'>Comment:</div>
              <div className='input-row-input'>
                <input value={this.state.task.comment} onChange={this.handleCommentChange} />
              </div>
            </div>

            <button className='dialog-form-submit' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
