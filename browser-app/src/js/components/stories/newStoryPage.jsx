import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as storyActions from '../../actions/storyActions'


export default class newStoryPage extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (
      <div className="stories-new">
        New story page!
        <div>ALERT ALERT ALERT</div>
      </div>
    )
  }
}
