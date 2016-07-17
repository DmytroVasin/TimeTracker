import React from 'react'

// import FontAwesome from 'react-fontawesome'


export class Box extends React.Component {

  // constructor (props) {
  //   super(props)
  // }

  // handleClick (e) {
  //   e.preventDefault()
  //   shell.openExternal('https://github.com/Tubehead/TubeHead')
  // }
  handleClick() {
    console.log('Open Story');
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
                <span onClick={ this.handleClick }>REGISTER NOW</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
