import React from 'react'

function Candidates() {
  const handleClick= ()=> {}
  return (
    <div>
      <button type="button" className="candidate-buton__1" onAuxClick={handleClick}>candidate 1</button>
      <button type="button" className="candidate-buton__2" onAuxClick={handleClick}>candidate 2</button>
      <button type="button" className="candidate-buton__3" onAuxClick={handleClick}>candidate 3</button>
      <button type="button" className="candidate-buton__4" onAuxClick={handleClick}>candidate 4</button>
    </div>
  )
}

export default Candidates
