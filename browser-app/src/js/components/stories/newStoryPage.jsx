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
    var storyError = <div id='new-story-error'>Fill in values.</div>

    return (
      <form id='new-story' onSubmit={this.handleSubmit.bind(this)}>

        <div className='new-story-inner'>
          { this.state.error.length ? storyError : null }

          <div className='new-story-input'>
            <input ref='titleInput' type='text' placeholder='Title' />
          </div>

          <div className='new-story-input'>
            <label for='select' className='select'>
              <select name='subject' onChange={this.change} value={this.state.value}>
                <option value='' selected>Choose Subject</option>
                <option value='1'>I have a suggestion</option>
                <option value='1'>I found a bug</option>
                <option value='1'>Other</option>
              </select>
            </label>
          </div>

          <div className='new-story-input'>
            <textarea ref='descriptionInput' type='text' placeholder='Description'></textarea>
          </div>

          <div className='new-story-submit'>
            <button type='submit'>Create Story</button>
          </div>
        </div>

      </form>
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
