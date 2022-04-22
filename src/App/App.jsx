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
} from './Store/action'
import { db } from './config/fbConfig'

import '../_App.scss'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // ----- Getting Collections Data -----
    db.collection('Collections').onSnapshot(
      (snapshot) => {
        dispatch(setCollectionsData(snapshot.docs.map((doc) => doc.data())))
        const HitData = snapshot.docs.map((doc) =>
          doc.data().allData.filter((i) => i.hit === true)
        )
        dispatch(setHitData(HitData[0]))

        // dispatch(setHitData(snapshot.docs.map((doc) => doc.data().allData)))
      }
      // console.log(snapshot.docs.map((doc) => doc.data().allData))
    )
    // ----- Getting Hits Data -----
    // db.collection('Hits').onSnapshot((snapshot) =>
    //   dispatch(setHitData(snapshot.docs.map((doc) => doc.data())))
    // )
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
