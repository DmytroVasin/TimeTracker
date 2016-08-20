import React, { Component } from 'react'

import { GraphHeader } from './GraphHeader'
import { GraphBody } from './GraphBody'
import { GraphFooter } from './GraphFooter'

export class GraphTable extends Component {

  render() {
    return (
      <table id='issuesTable' cellSpacing='0' cellPadding='3'>
        <GraphHeader />
        <GraphBody openGraphDialog={this.props.openGraphDialog} graph={this.props.graph} />
        <GraphFooter graph={this.props.graph} />
      </table>
    )
  }
}
