import React, { Component } from 'react'

import { GraphRow } from './GraphRow'

export class GraphBody extends Component {

  render() {
    if (this.props.stories.length == 0) {
      return null
    }

    let storyRows = this.props.stories.map( (story, index) => {
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
