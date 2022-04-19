import React from 'react'

import '../_App.scss'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Screens/Home'

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Home />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
