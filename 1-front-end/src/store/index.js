/* store index */
import { legacy_createStore as createStore } from 'redux'; // asignation on import
// cases
export const INCREMEN = 'increment';
export const DECREMNET = 'decrement';

//action creator
export const changeText = (value) => {
  return {
    type: CHANGE_TEXT,
    payload: value,
  }
}

//store
const initialState = {
  count: 0,
  username: 'nombre',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
      case CHANGE_TEXT{
        ...state, state.username
      }
    default:
      return state
  }
}

export const store = createStore(reducer)
