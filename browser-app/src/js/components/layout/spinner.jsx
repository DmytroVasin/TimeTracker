import React from 'react'

import { connect } from 'react-redux';

class Spinner extends React.Component {
  render() {
    let globalLoading = this.props.storiesLoading || this.props.periodsLoading || this.props.activeStoryLoading || this.props.graphTableLoading

    return (
      globalLoading ? <div className='loading'></div> : null
    )
  }
}

function mapStateToProps(store) {
  return {
    storiesLoading: store.reducer.storyList.loading,
    periodsLoading: store.reducer.periodList.loading,
    activeStoryLoading: store.reducer.activeStory.loading,
    graphTableLoading: store.reducer.graphTable.loading
  }
}

export default connect(
  mapStateToProps
)(Spinner)
