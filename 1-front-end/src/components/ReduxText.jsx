import React from 'react'
import { useSelector } from 'react-redux';

function ReduxText() {
  const username =useSelector(state => state.username)
  return (
    <div>ReduxText
      <h2>aqui va el texto</h2>
    </div>
  )
}

export default ReduxText
