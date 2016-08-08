import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'

import * as storyActions from '../../actions/storyActions'


export class newStoryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: ''};
  }

  handleSubmit(e) {
    e.preventDefault()

    const title = this.refs.titleInput
    const description = this.refs.descriptionInput

    if (title.value && description.value) {
      this.props.actions.addStory(title.value, description.value)
      // TODO: Can i do this in add Story?
      hashHistory.push('/')

      title.value = ''
      description.value = ''
      this.setState({error: ''})
    } else {
      this.setState({error: 'Fill in values.'})
    }
  }

  render () {
    var storyError = <div id="new-story-error">Fill in values.</div>

    return (
      <div id="new-story" onSubmit={this.handleSubmit.bind(this)}>
        { this.state.error.length ? storyError : null }

        <form>

          <div>
            <label>Title</label>
            <div>
              <input ref='titleInput' type='text' placeholder='Title' />
            </div>
          </div>


          <div>
            <label>Description</label>
            <div>
              <input ref='descriptionInput' type='text' placeholder='Description' />
            </div>
          </div>

          <div>
            <label>Status</label>
            <div>
              <select onChange={this.change} value={this.state.value}>
                <option></option>
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </select>
            </div>
          </div>

          <div>
            <button type="submit" disabled={this.props.isLoading}>
              {this.props.isLoading ? <i className="fa fa-server"></i> : null} Submit
            </button>
          </div>

        </form>
      </div>
    )
  }
}


// Smart component!
function mapStateToProps(store) {
  return {
    isLoading: store.reducer.isLoading,
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
