import React, { Component } from 'react'

import { InlineDialog } from './dialog/InlineDialog'
import { GraphTable } from './table/GraphTable'

export class GraphPage extends Component {

  componentWillMount() {
    this.props.actions.fetchGraph()
  }

  render() {
    if (this.props.graph.length == 0) {
      return null
    }

    return (
      <div id='app-box-wrapper'>
        <div className='app-box'>

          <InlineDialog graphDialog={this.props.graphDialog}
                        createTask={this.props.actions.createTask}
                        deleteTask={this.props.actions.deleteTask}
                        hideGraphDialog={this.props.actions.hideGraphDialog} />

          <GraphTable openGraphDialog={this.props.actions.openGraphDialog}
                      graph={this.props.graph} />

        </div>
      </div>
    )
  }
}
