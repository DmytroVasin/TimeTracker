import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'


export class newStoryPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="stories-new">
        New story page!
        <div>ALERT ALERT ALERT</div>
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
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(storyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newStoryPage)
