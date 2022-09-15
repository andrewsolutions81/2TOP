const { createStore } = require('redux');
//store start
const initialState = {
  count : 0,
  name : ""
}

const reducer =(state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return{
        ...state,
        count: state +1
      }
      break;

    default:
      break;
  }
}

const store = createStore(reducer);
// store end

store.subscribe(() => console.log(store.getState))// simula un componente

store.dispatch({type:"increment"});// dispatch
store.dispatch({type:"increment", payload : 5});
