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

    case "LOADING_DATA":
      return Object.assign({}, state, { isLoading: action.payload })

    case "SET_STORIES":
      return Object.assign({}, state, { stories: [...action.payload] })

    // case "ADD_STORY":
    //   return Object.assign({}, state, { stories: [...state.stories, action.payload] })

    default:
      return state
  }
}

export default reducer
