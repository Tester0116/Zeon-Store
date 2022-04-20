import React from 'react'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Screens/Home'

import '../_App.scss'

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
