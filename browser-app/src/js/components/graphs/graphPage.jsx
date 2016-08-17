import React, { Component } from 'react'

import { GraphRow } from './GraphRow'
import { InlineDialog } from './InlineDialog'
import { GraphHeader } from './GraphHeader'

export class GraphPage extends Component {

  componentWillMount() {
    this.props.actions.fetchStories()
  }

  render() {
    if (this.props.stories.length == 0) {
      return null
    }

    let storyRows = this.props.stories.map( (story, index) => {
      return <GraphRow key={story.id}
                       story={story}
                       index={index}
                       openGraphDialog={this.props.actions.openGraphDialog} />
    })

    return (
      <div id='wrapperBox'>
        <div className='wrapperInner'>

          <InlineDialog graphDialog={this.props.graphDialog}
                        createTask={this.props.actions.createTask}
                        hideDialog={this.props.actions.hideDialog}
                        deleteTask={this.props.actions.deleteTask} />

          <table id='issueTable' cellSpacing='0' cellPadding='3'>
            <GraphHeader />

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
