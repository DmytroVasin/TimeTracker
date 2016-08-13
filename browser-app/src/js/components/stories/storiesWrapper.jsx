import React from 'react'

import { StoryPeriod } from './storyPeriod.jsx'
import { Spinner } from '../layout/spinner.jsx';

export class StoriesWrapper extends React.Component {
  getFilteredStories(stories, statusFilter) {
    switch (statusFilter) {
      case 'in_progress':
        return stories.filter(story => story.story_type == 'in_progress')
      case 'estimated':
        return stories.filter(story => story.story_type == 'estimated')
      case 'to_estimate':
        return stories.filter(story => story.story_type == 'to_estimate')
      case 'done':
        return stories.filter(story => story.story_type == 'done')
      default:
        return stories
    }
  }

  getFilteredPeriods(periods, sprintFilter) {
    switch (sprintFilter) {
      case 'all':
        return periods
      default:
        return periods.filter(period => period.id == sprintFilter)
    }
  }

  render () {
    const { stories, periods, statusFilter, sprintFilter } = this.props
    const filteredStories = this.getFilteredStories(stories, statusFilter)
    const filteredPeriods = this.getFilteredPeriods(periods, sprintFilter)

    let storyPeriods = filteredPeriods.map( (item) => {
      return <StoryPeriod key={item.id}
                          title={item.name}
                          periodStories={ filteredStories.filter(story => story.period_id == item.id) }
                          removeStory={this.props.removeStory} />
    })

    return (
      <div id="stories-wrapper">

        <div className="stories-main">
          { storyPeriods }
        </div>

      </div>
    )
  }
}
