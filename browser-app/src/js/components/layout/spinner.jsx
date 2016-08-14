import React from 'react'

import { connect } from 'react-redux';

class Spinner extends React.Component {
  render() {
    let globalLoading = this.props.storiesLoading || this.props.periodsLoading || this.props.activeStoryLoading

    return (
      globalLoading ? <div className='loading'></div> : null
    )
  }
}

function mapStateToProps(store) {
  return {
    storiesLoading: store.reducer.storyList.loading,
    periodsLoading: store.reducer.periodList.loading,
    activeStoryLoading: store.reducer.activeStory.loading
  }
}

export default connect(
  mapStateToProps
)(Spinner)
