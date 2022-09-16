import React from 'react'
import Candidates from '../components/Candidates'
import Filtro from '../components/Filtro'
import TotalVotos from '../components/TotalVotos'
import VotosIndividuales from '../components/VotosIndividuales'
import StoreComponent from '../store.context/StoreComponent'

function TodoSeTrataDeContexto() {
  return (
    <div>
      <h1>Todo Se Trata De Contexto</h1>
      <StoreComponent>
        <h1>h1 desde todose....</h1>{/* cuando esta envuelto llega por children */}
        <Candidates />
        <Filtro />
        <TotalVotos />
        <VotosIndividuales />
      </StoreComponent>
    </div>
  )
}

export default TodoSeTrataDeContexto
