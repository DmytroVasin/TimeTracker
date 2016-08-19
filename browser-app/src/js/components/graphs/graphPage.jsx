import React, { Component } from 'react'

import { InlineDialog } from './InlineDialog'
import { GraphHeader } from './GraphHeader'
import { GraphBody } from './GraphBody'
import { GraphFooter } from './GraphFooter'

export class GraphPage extends Component {

  componentWillMount() {
    this.props.actions.fetchGraph()
  }

  render() {
    if (this.props.graph.length == 0) {
      return null
    }

    return (
      <div id='wrapperBox'>
        <div className='wrapperInner'>

          <InlineDialog graphDialog={this.props.graphDialog}
                        createTask={this.props.actions.createTask}
                        hideDialog={this.props.actions.hideDialog}
                        deleteTask={this.props.actions.deleteTask} />

          <table id='issuesTable' cellSpacing='0' cellPadding='3'>
            <GraphHeader />
            <GraphBody openGraphDialog={this.props.actions.openGraphDialog} graph={this.props.graph} />
            <GraphFooter />
          </table>
        </div>
      </div>
    )
  }
}
