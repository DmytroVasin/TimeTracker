import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { StoryBox } from './storyBox.jsx'
import { StoriesSideBar } from './storiesSidebar.jsx'

import * as storyActions from '../../actions/storyActions'

class storyPage extends Component {
  componentDidMount() {
    let { dispatch } = this.props
    let action = storyActions.fetchStories()

    dispatch(action)
  }

  render() {
    var storyBoxes = this.props.stories.map( (item) => {
      return <StoryBox story={item} key={item.id}/>
    })

    return (
      <div className="stories-wrapper">
        <StoriesSideBar />

        <div className="stories-main">
          <div className="stories-period">
            <div className='period-title'>Overdue</div>
            <div className='story-list'>
              {storyBoxes}
            </div>
          </div>

          <div className="stories-period">
            <div className='period-title'>Sprint 27</div>
            <div className='story-list'>
              {storyBoxes}
            </div>
          </div>

          <div className="stories-period">
            <div className='period-title'>Unscheduled</div>
            <div className='story-list'>
              {storyBoxes}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Smart component!
function mapStateToProps(store) {
  return {
    stories: store.reducer.stories
  }
}

export default connect(
  mapStateToProps
)(storyPage)
