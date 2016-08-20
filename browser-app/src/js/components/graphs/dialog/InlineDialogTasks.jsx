import React from 'react'

export class InlineDialogTasks extends React.Component {

  handleDelete = (taskId) => {
    this.props.deleteTask(this.props.storyId, taskId)
  }

  render () {
    const { tasksList } = this.props

    if (!tasksList.length) return null

    let listItems = tasksList.map( (task) => {
      return  <li key={task.id} className='task'>
                <span className='task-minutes'>{task.minutes}</span>
                <span className='task-title'>{task.comment}</span>
                <span className='task-delete fa fa-trash-o' onClick={() => this.handleDelete(task.id)} ></span>
              </li>
    })

    return (
      <ul className='tasks-list'>
        { listItems }
      </ul>
    )
  }
}
