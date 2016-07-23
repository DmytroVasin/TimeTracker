//   {id: 1, title: 'Education Grants', description: 'Prepare your students for cloud computing with free credits.', type: 'green'},
//   {id: 2, title: 'July Webinar Series', description: 'Learn about containers, Node.js and migration to the cloud.', type: 'yellow'},
//   {id: 3, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'},
//   {id: 4, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'}
// ]

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
  stories: []
}

const reducer = function(state=initialState, action) {
  switch(action.type) {

    // case "FETCH_USERS_START": {
    //   return {
    //     ...state,
    //     fetching: true
    //   }
    //   break;
    // }

    // case "FETCH_USERS_ERROR": {
    //   return {
    //     ...state,
    //     fetching: false,
    //     error: action.payload
    //   }
    //   break;
    // }

    // case "FETCH_USERS_SUCCESS": {
    //   return {
    //     ...state,
    //     fetching: false,
    //     fetched: true,
    //     users: action.payload
    //   }
    //   break;
    // }

    case "FETCH_STORIES_SUCCESS":
      return Object.assign({}, state, {
        stories: action.payload
      })

    default:
      return state
  }
}

export default reducer
