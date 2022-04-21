import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Screens/Home'

import { setHitData, setHomeBanner, setLoad } from './Store/action'
import { db } from './config/fbConfig'

import '../_App.scss'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // ----- Getting Hits Data -----
    db.collection('Hits').onSnapshot((snapshot) =>
      dispatch(setHitData(snapshot.docs.map((doc) => doc.data())))
    )
    // ----- Getting Home Banner -----
    db.collection('HomeBanner').onSnapshot((snapshot) =>
      dispatch(setHomeBanner(snapshot.docs.map((doc) => doc.data())))
    )
    setTimeout(() => dispatch(setLoad(false)), 3500)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
