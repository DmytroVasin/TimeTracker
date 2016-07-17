import React from 'react'

import { StoryBox } from './stories/story_box.jsx'
import { StoriesSideBar } from './stories/stories_sidebar.jsx'

export class Container extends React.Component {
  render() {
    var stories = [
      {id: 1, title: 'Education Grants', description: 'Prepare your students for cloud computing with free credits.', type: 'green'},
      {id: 2, title: 'July Webinar Series', description: 'Learn about containers, Node.js and migration to the cloud.', type: 'yellow'},
      {id: 3, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'},
      {id: 4, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'}
    ];

    var storyBoxes = stories.map(function(item){
      return <StoryBox story={item} key={item.id}/>
    })

    return (
      <div className="stories-wrapper">
        <StoriesSideBar />

        <div className="stories-main">
          { storyBoxes }
        </div>
      </div>
    )
  }
}
