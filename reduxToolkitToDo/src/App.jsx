import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodos'
import ToDos from './components/ToDos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodos />
      <ToDos />
    </>
  )
}

export default App