import React, { Component } from 'react'

import { StoriesSideBar } from './storiesSidebar.jsx'
import StoriesWrapper from './storiesWrapper.jsx'

export default class storyPage extends Component {
  render() {

    return (
      <div className="stories-container">
        <StoriesSideBar />
        <StoriesWrapper />
      </div>
    )
  }
}
