import React from 'react'

import { connect } from 'react-redux';

class Spinner extends React.Component {
  render() {
    return (
      this.props.isLoading ? <div className='loading'>Loading&#8230;</div> : null
    )
  }
}

// Smart component!
function mapStateToProps(store) {
  return {
    isLoading: store.reducer.isLoading
  }
}

export default connect(
  mapStateToProps
)(Spinner)
