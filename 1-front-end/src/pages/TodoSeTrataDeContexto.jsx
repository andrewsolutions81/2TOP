import React from 'react'
import Candidates from '../components/Candidates'
import Filtro from '../components/Filtro'
import TotalVotos from '../components/TotalVotos'
import VotosIndividuales from '../components/VotosIndividuales'
import StoreComponent from '../components/StoreComponent'

function TodoSeTrataDeContexto() {
  return (
    <div>
      <h1>Todo Se Trata De Contexto</h1>
      <StoreComponent.Provider >
        <Candidates />
        <Filtro />
        <TotalVotos />
        <VotosIndividuales />
      </StoreComponent.Provider>
    </div>
  )
}

export default TodoSeTrataDeContexto
