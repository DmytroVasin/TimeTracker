import axios from 'axios'

// INDEX
export function fetchStories() {
  return (dispatch) => {
    dispatch(requestData())
    axios.get('http://localhost:3000/stories.json')
    .then(function(response) {
      dispatch(receiveDatas(response.data))
    })
  }
}

// CREATE
export function addStory(title, description) {
  return (dispatch) => {
    dispatch(requestData())
    axios.post('http://localhost:3000/stories.json', { title: title, description: description })
    .then(function(response) {
      dispatch(receiveData(response.data))
    })
  }
}

// SHOW
// export function addStory(title, description) {
//   return (dispatch) => {
//     dispatch(requestData())
//     axios.delete('http://localhost:3000/stories.json', { title: title, description: description })
//     .then(function(response) {
//       dispatch(receiveData(response.data))
//     })
//   }
// }





function requestData() {
  return {
    type: 'REQ_STORIES'
  }
}

function receiveDatas(stories) {
  return {
    type: 'RECV_STORIES',
    payload: stories
  }
};

function receiveData(story) {
  return {
    type: 'RECV_STORIES',
    payload: [story]
  }
};
