import './App.css'
import { Get, Post, Put, Delete } from './functions'

function App() {

  return (
    <div>
      <button onClick={Get}>GET</button>
      <button onClick={Post}>POST</button>
      <button onClick={Put}>PUT</button>
      <button onClick={Delete}>DELETE</button>
    </div>
  )
}

export default App
