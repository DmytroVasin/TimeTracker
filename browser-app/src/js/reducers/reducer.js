const initialState = {
  isLoading: false,
  fetching: false,
  fetched: false,
  users: [],
  error: null,
  stories: []
}

const reducer = function(state=initialState, action) {
  switch(action.type) {

    case "FETCH_STORIES_SUCCESS":
      return Object.assign({}, state, {
        stories: action.payload
      })

    // case "ADD_STORY": {
    //   return {
    //     ...state,
    //     stories: state.stories.concat(action.payload)
    //   }
    //   break;
    // }


    case "REQ_STORIES":
      return Object.assign({}, state, { isLoading: true })

    case "RECV_STORIES":
      return Object.assign({}, state, { isLoading: false })

    default:
      return state
  }
}

export default reducer
