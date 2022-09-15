import React from 'react'





function Candidates(e) {
  e.preventDefault()
  const imput = e.target.value

  const handleClick1= (imput)=> {

  }
  return (
    <div>
      <button type="button" className="candidate-buton__1" onAuxClick={handleClick1}>candidate 1</button>
      {/* <button type="button" className="candidate-buton__2" onAuxClick={handleClick2}>candidate 2</button>
      <button type="button" className="candidate-buton__3" onAuxClick={handleClick3}>candidate 3</button>
      <button type="button" className="candidate-buton__4" onAuxClick={handleClick4}>candidate 4</button> */}
    </div>
  )
}

export default Candidates
