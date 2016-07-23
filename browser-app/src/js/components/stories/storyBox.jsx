import React from 'react'

// import { addTodo } from '../actions/actions';

export class StoryBox extends React.Component {
  constructor (props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);;
  }

  _handleClick() {
    //  ???????????????
    // this.props.dispatch(addTodo())
  }

  render () {
    return (

      <div className="banner-box">
        <table>
          <tbody>
            <tr>
              <td className={'type '+this.props.story.type} rowSpan='2'>
              </td>

              <td className='description'>
                <h3>{this.props.story.title}</h3>
                <p>{this.props.story.description}</p>
              </td>
            </tr>

            <tr>
              <td className="learn-more">
                <span onClick={ this._handleClick }>Show</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
