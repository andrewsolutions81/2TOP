//store
const store = {
  post: [],
  loadint: false,
  count: 10,
}
//dispatch
const dispatch = (action) => {
  store = reducer(store, action)
}

//component
const handleClick = () => {
  dispatch({type:"increment"})//action
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return{
        ...state,
        count: state.count +1
      };
    case "decrement":
      return{
        ...state,
        count: state.count - 1
      };
      default:
      console.log('reducer default case');
  }
}
