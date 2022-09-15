import React from 'react'
import Candidates from '../components/Candidates'
import Filtro from '../components/Filtro'
import TotalVotos from '../components/TotalVotos'
import VotosIndividuales from '../components/VotosIndividuales'

function TodoSeTrataDeContexto() {
  return (
    <div>
      <h1>Todo Se Trata De Contexto</h1>
      <Candidates />
      <Filtro />
      <TotalVotos />
      <VotosIndividuales />
    </div>
  )
}

export default TodoSeTrataDeContexto
