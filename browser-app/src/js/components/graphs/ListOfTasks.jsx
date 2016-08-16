import React from 'react'

export class ListOfTasks extends React.Component {

  render () {
    const { tasks, error } = this.props.taskList

    if (error) {
      return <div>Error: {error}</div>
    }
    if (!tasks.length) {
      return null
    }

    let listItems = this.props.taskList.tasks.map( (task) => {
      return  <li key={task.id} className='download'>
                <span className='taskTime'>3h</span>
                <span className='taskTitle'>{task.comment}</span>
                <span className='fa fa-trash-o' onClick={() => this.props.deleteTask(task.id) } ></span>
              </li>
    })

    return (
      <ul className='downloads'>
        { listItems }
      </ul>
    )
  }
}

