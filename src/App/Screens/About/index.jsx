import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ScrollToTop from '../../Components/ScrollToTop'
import LoadingSpinner from '../../Components/Spinner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import { setAbout } from '../../Store/action'
import { db } from '../../config/fbConfig'

import './_index.scss'

const About = () => {
  const dispatch = useDispatch()

  const { getAbout } = useSelector((state) => state.appReducer)
  useEffect(() => {
    // ----- Getting About Data -----
    db.collection('About').onSnapshot((snapshot) =>
      dispatch(setAbout(snapshot.docs.map((doc) => doc.data())))
    )
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'О нас' }]} />

      <div className="container">
        {Boolean(getAbout.length !== 0) ? (
          <div className="about-container">
            <div className="about-container__imgblock">
              {getAbout[0]?.imgUrl.map((url, index) => (
                <img src={url} alt="About img" key={index} />
              ))}
            </div>
            <div className="about-container__textblock">
              <h4>О нас</h4>
              <p>{getAbout[0]?.aboutText}</p>
            </div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
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

export default About
