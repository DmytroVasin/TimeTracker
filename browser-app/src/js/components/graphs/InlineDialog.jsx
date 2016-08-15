import React, { Component } from 'react'

export class InlineDialog extends Component {

  render() {

    return (
      <div className='inlineDialog'>

        <ul className='downloads'>
          <li className='download'>
            <span className='taskTime'>3h</span>
            <span className='taskTitle'>Some time task title</span>
            <span className='fa fa-trash-o'></span>
          </li>
          <li className='download'>
            <span className='taskTime'>1h</span>
            <span className='taskTitle'>New task title</span>
            <span className='fa fa-trash-o'></span>
          </li>
        </ul>

        <form>
          <div className='timeTitle'>Log Work for 08/Jul/16</div>

          <div className='input-row'>
            <div className='input-row-title'>Spent:</div>
            <div className='new-story-input'>
              <input/>
            </div>
          </div>

          <div className='input-row'>
            <div className='input-row-title'>Comment:</div>
            <div className='new-story-input'>
              <input />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
