import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Screens/Home'

import {
  setCollectionsData,
  setHitData,
  setHomeBanner,
  setLoad,
  setNewsData,
  setFreshData,
  setBenefitData,
} from './Store/action'
import { db } from './config/fbConfig'

import '../_App.scss'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // ----- Getting Collections Data -----
    db.collection('Collections').onSnapshot((snapshot) => {
      const coll = snapshot.docs.map((doc) => doc.data())
      let time = 0
      while (time <= 57) {
        coll.splice(0, 0, coll[0])
        time++
      }
      dispatch(setCollectionsData(coll))
      // ---------- setting Hit Data ----------
      const HitData = snapshot.docs.map((doc) =>
        doc.data().allData.filter((i) => i.hit === true)
      )
      dispatch(setHitData(HitData[0]))

      // ---------- setting Frsh Data ----------
      const FreshData = snapshot.docs.map((doc) =>
        doc.data().allData.filter((i) => i.new === true)
      )
      dispatch(setFreshData(FreshData[0]))
    })
    // ----- Getting Benefit Data -----
    db.collection('Benefits').onSnapshot((snapshot) =>
      dispatch(setBenefitData(snapshot.docs.map((doc) => doc.data())))
    )
    // ----- Getting Home Banner -----
    db.collection('HomeBanner').onSnapshot((snapshot) =>
      dispatch(setHomeBanner(snapshot.docs.map((doc) => doc.data())))
    )
    // ----- Getting News Data -----
    db.collection('News').onSnapshot((snapshot) =>
      dispatch(setNewsData(snapshot.docs.map((doc) => doc.data())))
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
