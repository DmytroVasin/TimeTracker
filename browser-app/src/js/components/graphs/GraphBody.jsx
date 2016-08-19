import React, { Component } from 'react'

import { GraphRow } from './GraphRow'

export class GraphBody extends Component {

  render() {
    let storyRows = this.props.graph.map( (story, index) => {
      return <GraphRow key={story.id}
                       story={story}
                       index={index}
                       openGraphDialog={this.props.openGraphDialog} />
    })

    return (
      <tbody>
        { storyRows }
      </tbody>
    )
  }
}
