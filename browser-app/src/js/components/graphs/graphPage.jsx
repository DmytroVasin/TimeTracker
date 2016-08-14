import React, { Component } from 'react'

import { GraphRow } from './GraphRow.jsx'

export class GraphPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStories()
  }

  render() {
    let storyRows = this.props.stories.map( (story, index) => {
      return <GraphRow key={story.id} story={story} index={index} />
    })


    if (this.props.stories.length == 0) {
      return null;
    }

    return (
   <div id='new-story'>
     <div className='new-story-inner'>


      <table id="issuetable" cellSpacing="0" cellPadding='3'>
        <thead>
          <tr className='rowHeader'>
            <th className='colHeader' colSpan='3'>Timesheet</th>
            <th ><span>Mon<br/>11/Jul</span></th>
            <th ><span>Tue<br/>12/Jul</span></th>
            <th ><span>Wed<br/>13/Jul</span></th>
            <th className='toDay'><span>Thu<br/>14/Jul</span></th>
            <th ><span>Fri<br/>15/Jul</span></th>
            <th className='nonBusinessDay'><span>Sat<br/>16/Jul</span></th>
            <th className='nonBusinessDay'><span>Sun<br/>17/Jul</span></th>
            <th><br/>Total</th>
          </tr>
        </thead>

        <tbody>
          { storyRows }

          <tr className='rowFooter'>
            <td colSpan='3' className='nav total'>Total:</td>
            <td className='total'>8h</td>
            <td className='total'></td>
            <td className='total'></td>
            <td className='total'>8h</td>
            <td className='total'>8h</td>
            <td className='total'>8h</td>
            <td className='total'>2h</td>
            <td className='total'>64h</td>
          </tr>
        </tbody>
      </table>

      </div>
      </div>
    )
  }
}
