import React from 'react'
import { Link } from 'react-router'

export class StoryForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      formType: this.props.formType,
      story: this.props.story || { title: '', description: '', period: '0' }
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.state.story.title && this.state.story.description) {
      this.props.createOrUpdateStoryRequest(this.state.story)
    } else {
      this.setState({error: 'Fill in values.'})
    }
  }

  handleTitleChange (event) {
    const newState = this.state
    newState['story']['title'] = event.target.value
    this.setState(newState)
  }

  handleDescriptionChange (event) {
    const newState = this.state
    newState['story']['description'] = event.target.value
    this.setState(newState)
  }

  render () {
    var storyError = <div id='new-story-error'>Fill in values.</div>

    return (
      <form id='new-story' onSubmit={this.handleSubmit.bind(this)}>

        <div className='new-story-inner'>
          { this.state.error.length ? storyError : null }

          <div className='new-story-input'>
            <input value={this.state.story.title} onChange={this.handleTitleChange.bind(this)} placeholder='Title' />
          </div>

          <div className='new-story-input'>
            <label className='select'>
              <select ref='periodInput' onChange={this.change}>
                <option value=''>Choose Sprint</option>
                <option value='0'>Unscheduled</option>
                <option value='1'>Sprint 1</option>
                <option value='2'>Sprint 2</option>
                <option value='3'>Sprint 3</option>
              </select>
            </label>
          </div>

          <div className='new-story-input'>
            <textarea value={this.state.story.description} onChange={this.handleDescriptionChange.bind(this)} placeholder='Description'></textarea>
          </div>

          <div className='new-story-submit'>
            <button type='submit'>{this.state.formType} Story</button>
          </div>
        </div>

      </form>
    )
  }
}
