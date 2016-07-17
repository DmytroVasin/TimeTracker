const initialState = {
  number: 1
}

const count = function update(state = initialState, action) {
  if(action.type === 'INCREASE') {
    return {
      number: state.number + action.amount
    }
  }

  else if(action.type === 'DECREASE') {
    return {
      number: state.number - action.amount
    }
  }

  return state
}

export default count
