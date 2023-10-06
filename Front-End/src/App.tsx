import './App.css'
import Helmet from "react-helmet"
import AppContents from './AppContents'
function App() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Adri Antori W-15</title>
        <meta name="description" content="RevoU Week 15" />
      </Helmet>
      <AppContents />
    </>
  )
}

export default App
