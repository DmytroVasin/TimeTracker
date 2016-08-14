import React, { Component } from 'react'

import { GraphRow } from './GraphRow'

export class GraphPage extends Component {
  componentWillMount() {
    this.props.actions.fetchStories()
  }

  render() {
    if (this.props.stories.length == 0) {
      return null;
    }

    let storyRows = this.props.stories.map( (story, index) => {
      return <GraphRow key={story.id} story={story} index={index} />
    })

    return (
      <div id='wrapperBox'>
        <div className='wrapperInner'>

          <table id='issueTable' cellSpacing='0' cellPadding='3'>
            <thead>
              <tr>
                <th className='colHeader' colSpan='3'>Timesheet</th>
                <th><span>Mon 11/Jul</span></th>
                <th><span>Tue 12/Jul</span></th>
                <th><span>Wed 13/Jul</span></th>
                <th className='toDay'><span>Thu 14/Jul</span></th>
                <th><span>Fri 15/Jul</span></th>
                <th className='nonBusinessDay'><span>Sat 16/Jul</span></th>
                <th className='nonBusinessDay'><span>Sun 17/Jul</span></th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              { storyRows }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='3' className='total'>Total:</td>
                <td>8h</td>
                <td></td>
                <td></td>
                <td>8h</td>
                <td>8h</td>
                <td>8h</td>
                <td>2h</td>
                <td>64h</td>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    )
  }
}
