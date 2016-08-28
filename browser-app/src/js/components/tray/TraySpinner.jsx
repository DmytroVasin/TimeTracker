import React from 'react'

import { connect } from 'react-redux';

class TraySpinner extends React.Component {
  render() {
    let globalLoading = this.props.storiesLoading

    return (
      globalLoading ? <div className='loading'></div> : null
    )
  }
}

function mapStateToProps(store) {
  return {
    storiesLoading: store.storyList.loading
  }
}

export default connect(
  mapStateToProps
)(TraySpinner)
