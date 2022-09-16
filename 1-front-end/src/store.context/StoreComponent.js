import { useState, createContext } from "react";
export const VotesCountContext = createContext(); //create the context
// functions go here ?
const initialState = {
  //default initial state of 0 votes
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  totalvoteskey: 0,
  numberpercentage: true,
};

function StoreComponent({ children }) {
  //mayuscula al ser componente// este provee el contexto

  function percentage() {
    const totalVotes =
      initialState.c1 + initialState.c2 + initialState.c3 + initialState.c4;
    const percentageVariable = totalVotes / initialState.totalvoteskey;
  }

  const [count, setCount] = useState(initialState); // useState of the initial state
  return (
    <VotesCountContext.Provider value={{ count }}>
      {children}
    </VotesCountContext.Provider>
  );
}

export default StoreComponent;
