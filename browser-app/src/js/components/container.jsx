import React from 'react'

// import { Video } from './video.jsx'
// import { PlayList } from './playlist.jsx'
// import { SearchBox } from './search-box.jsx'
// import { SearchHistory } from './search-history.jsx'
// import { Navigation } from './navigation.jsx'
// import { Sidebar } from './sidebar.jsx'
// import { PopularList } from './popular-list.jsx'
// import { Github } from './github.jsx'
import { Box } from './box.jsx'

export class Container extends React.Component {
  render() {
    var stories = [
      {title: 'Education Grants', description: 'Prepare your students for cloud computing with free credits.', type: 'green'},
      {title: 'July Webinar Series', description: 'Learn about containers, Node.js and migration to the cloud.', type: 'yellow'},
      {title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'}
    ];

    var storyBoxes = stories.map(function(item){
      return <Box story={item}/>
    })

    return (
      <div className="container">
        { storyBoxes }
      </div>
    )
  }
}
