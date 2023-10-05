import './App.css'
import { Get, Post, Put, Delete } from './functions'
import Helmet from "react-helmet"

function App() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adri Antori W-15</title>
        <meta name="description" content="RevoU Week 15" />
      </Helmet>
      <button onClick={Get}>GET</button>
      <button onClick={Post}>POST</button>
      <button onClick={Put}>PUT</button>
      <button onClick={Delete}>DELETE</button>
    </div>
  )
}

export default App
