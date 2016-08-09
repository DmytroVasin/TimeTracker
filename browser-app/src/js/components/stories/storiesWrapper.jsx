import React from 'react'

import { StoryPeriod } from './storyPeriod.jsx'
import { Spinner } from '../layout/spinner.jsx';

export class StoriesWrapper extends React.Component {
  getFilteredStories(stories, statusFilter) {
    switch (statusFilter) {
      case 'in_progress':
        return stories.filter(story => story.story_type == 'yellow');
      case 'estimated':
        return stories.filter(story => story.story_type == 'green');;
      case 'to_estimate':
        return stories.filter(story => story.story_type == 'grey');;
      default:
        return stories
    }
  }


  render () {
    const { stories, isLoading, statusFilter } = this.props;
    const filteredStories = this.getFilteredStories(stories, statusFilter)

    return (
      <div id="stories-wrapper">
        {isLoading ? <Spinner />:null }

        <div className="stories-main">
          {statusFilter}
          <StoryPeriod title='Sprint 26' periodStories={ filteredStories.filter(story => story.period == 1) } />
          <StoryPeriod title='Spring 27' periodStories={ filteredStories.filter(story => story.period == 2) } />
          <StoryPeriod title='Overdue'   periodStories={ filteredStories.filter(story => story.period == 3) } />
        </div>

      </div>
    )
  }
}
