import { useState } from 'react'
import './App.css'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import Redesociais from './components/redessociais'
import Treino from './components/treino'

function App() {


  return (
    <div>
      <Cabecalho />
      <Treino />
      <Redesociais />
      <Rodape />
    </div>
  )
}

export default App
