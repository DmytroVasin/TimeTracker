import React, { Component } from 'react'

export class StoryForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      formType: this.props.formType,
      story: this.props.story || { title: '', description: '', period_id: '', story_type: '' }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let story = this.state.story

    if (story.title && story.description && story.period_id && story.story_type) {
      this.props.createOrUpdateStory(story)
    } else {
      this.setState({error: 'Fill in values.'})
    }
  }

  handleTitleChange = (event) => {
    this.updateStory('title', event.target.value)
  }
  handleDescriptionChange = (event) => {
    this.updateStory('description', event.target.value)
  }
  handlePeriodChange = (event) => {
    this.updateStory('period_id', event.target.value)
  }
  handleTypeChange = (event) => {
    this.updateStory('story_type', event.target.value)
  }

  updateStory (field, value) {
    this.setState({
      story: {
        ...this.state.story,
        [field]: value
      }
    })
  }

  render () {
    let storyError = <div id='new-story-error'>Fill in values.</div>

    let sprintOptions = this.props.periods.map( (item) => {
      return <option key={item.id} value={item.id}>{item.name}</option>
    })

    let storyTypes = { 'to_estimate': 'To Estimate', 'estimated': 'Estimated', 'in_progress': 'In Progress', 'done': 'Done' }

    let storyTypesOptions = Object.keys(storyTypes).map( (key) => {
      return <option key={key} value={key}>{storyTypes[key]}</option>
    })


    return (
      <form id='new-story' onSubmit={this.handleSubmit}>

        <div className='new-story-inner'>
          { this.state.error.length ? storyError : null }

          <div className='new-story-input'>
            <input value={this.state.story.title} onChange={this.handleTitleChange} placeholder='Title' />
          </div>

          <div className='new-story-input'>
            <label className='select'>
              <select value={this.state.story.period_id} onChange={this.handlePeriodChange}>
                <option value=''>Choose Sprint</option>
                { sprintOptions }
              </select>
            </label>
          </div>

          <div className='new-story-input'>
            <label className='select'>
              <select value={this.state.story.story_type} onChange={this.handleTypeChange}>
                <option value=''>Choose Type</option>
                { storyTypesOptions }
              </select>
            </label>
          </div>

          <div className='new-story-input'>
            <textarea value={this.state.story.description} onChange={this.handleDescriptionChange} placeholder='Description'></textarea>
          </div>

          <div className='new-story-submit'>
            <button type='submit'>{this.state.formType} Story</button>
          </div>
        </div>

      </form>
    )
  }
}
