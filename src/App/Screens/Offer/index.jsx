import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ScrollToTop from '../../Components/ScrollToTop'
import LoadingSpinner from '../../Components/Spinner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import { setAbout } from '../../Store/action'
import { db } from '../../config/fbConfig'

import './_index.scss'

const Offer = () => {
  const dispatch = useDispatch()

  const { getAbout } = useSelector((state) => state.appReducer)
  useEffect(() => {
    // ----- Getting About Data -----
    db.collection('About').onSnapshot((snapshot) =>
      dispatch(setAbout(snapshot.docs.map((doc) => doc.data())))
    )
  }, [])

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Публичная оферта' }]} />

      <div className="container">
        <div className="offer-container">
          <h4>Публичная оферта </h4>
          {Boolean(getAbout.length !== 0) ? (
            <div className="offer-container__block">
              <p>{getAbout[0]?.offer}</p>
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default Offer
