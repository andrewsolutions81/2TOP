import React from 'react'
import{ useDispatch } from 'react-redux'


function ReduxButton() {
  const dispatch = useDispatch()//dispatch tha action

  return (
    <div>ReduxButton
      <button
      type="button"
      onClick={() => dispatch({type: "increment"})}//dispatch the cation of type "increment"
      >increment
      </button>
    </div>
  )
}

export default ReduxButton
