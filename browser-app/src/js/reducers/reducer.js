import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = (state=initialState, action) => {
  switch(action.type) {

    case "FETCH_USERS_START": {
      return {
        ...state,
        fetching: true
      }
      break;
    }

    case "FETCH_USERS_ERROR": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break;
    }

    case "FETCH_USERS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
      break;
    }
  }
}



export default combineReducers( Object.assign({}, reducer, {routing: routerReducer }) )
