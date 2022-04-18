import React from 'react'

import '../App.scss'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <br />
      <br />
      <div className="container">Heey!!!</div>
      <br />
      <br />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
