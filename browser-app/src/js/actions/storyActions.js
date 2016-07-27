import axios from 'axios'
import * as firebaseApi from '../api/firebase';

export function fetchStories() {
  return {
    type: 'FETCH_STORIES_SUCCESS',
    payload: [
      {id: 1, period: 1, title: 'Education Grants', description: 'Prepare your students for cloud computing with free credits.', type: 'green'},
      {id: 2, period: 1, title: 'July Webinar Series', description: 'Learn about containers, Node.js and migration to the cloud.', type: 'yellow'},
      {id: 3, period: 1, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'},
      {id: 4, period: 2, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'}
    ]
  }
}

// export function addStory(title, description) {
//   const uid = () => Math.random().toString(34).slice(2);

//   return {
//     type: 'ADD_STORY',
//     payload: { id: uid(), period: 2, title: title, description: description, type: 'grey' }
//   }
// }

export function addFireStory(title, description) {
  const uid = () => Math.random().toString(34).slice(2);

  return (dispatch) => {
    dispatch( requestData() )
    axios.post('https://timetracking-c860a.firebaseio.com/stories.json', { firstName: 'Fred', lastName: 'Flintstone' })
    .then(function(response) {
      dispatch( receiveData(response.data) )
    })
    .catch(function(response){
      console.log('ERROR')
    })

  }
}

function requestData() {
  return {
    type: 'REQ_STORIES'
  }
};


function receiveData(story) {
  return {
    type: 'RECV_STORIES',
    payload: story
  }
};
