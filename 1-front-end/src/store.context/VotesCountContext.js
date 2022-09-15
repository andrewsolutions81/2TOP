import { useState, createContext } from "react";
export const VotesCountContext = createContext();//create the context

const initialState = {//default initial state of 0 votes
  c1 : 0,
  c2 : 0,
  c3 : 0,
  c4 : 0,
  totalvotes: 0,
  numberpercentage: true,
}

const [count, setCount] = useState(initialState)// useState of the initial state

export const VotesCountProvider = ({ children }) =>{// main function
  const
}
