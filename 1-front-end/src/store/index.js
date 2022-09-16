/* store index */
import { legacy_createStore as createStore } from 'redux'; // asignation on import

//store
const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

export const store = createStore(reducer)
