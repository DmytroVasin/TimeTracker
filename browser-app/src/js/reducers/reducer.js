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

    case "REQ_STORIES":
      return Object.assign({}, state, { isLoading: true })

    case "RECV_STORIES":
      return Object.assign({}, state, { isLoading: false, stories: state.stories.concat(action.payload) })

    default:
      return state
  }
}

export default reducer
