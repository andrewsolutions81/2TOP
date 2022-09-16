import React from 'react'
import {useSelector} from 'react-redux' // brings actualization state proider

export default function ReduxCounter() {
  const dataCounter = useSelector((state) => state.count)//suscrie to  status
  return (
    <div>ReduxCounter
      <h2>{dataCounter}</h2>
    </div>
  )
}
