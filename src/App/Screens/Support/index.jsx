import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ScrollToTop from '../../Components/ScrollToTop'
import LoadingSpinner from '../../Components/Spinner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import { setSupportData } from '../../Store/action'
import { db } from '../../config/fbConfig'

import './_index.scss'

const Support = () => {
  const dispatch = useDispatch()

  const { getSupportData } = useSelector((state) => state.appReducer)
  useEffect(() => {
    // ----- Getting About Data -----
    db.collection('Support').onSnapshot((snapshot) => {
      dispatch(setSupportData(snapshot.docs.map((doc) => doc.data())))
      console.log(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const [isActive, setIsActive] = useState(1)
  const Accordion = ({ question, answer, id }) => {
    return (
      <div className="support-container__item" onClick={() => setIsActive(id)}>
        <div className="fdrow">
          <span>{question}</span>
          <img
            className={isActive === id ? 'active' : undefined}
            onClick={() => setIsActive(id)}
            src={require('../../assets/arrow-up-icon.png')}
            alt="arrow icon"
          />
        </div>
        {isActive === id && (
          <p className={'support-container__item-description'}>{answer}</p>
        )}
      </div>
    )
  }
  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Публичная оферта' }]} />

      <div className="container">
        {Boolean(getSupportData.length !== 0) ? (
          <div className="support-container">
            <img src={getSupportData[0].img} alt="Support img" />
            <div className="support-container__block">
              <h5>Помощь</h5>
              {getSupportData[0].faq?.map((item, key) => (
                <Accordion
                  question={item.question}
                  answer={item.answer}
                  id={key}
                />
              ))}
            </div>
          </div>
        ) : (
          // <div style={{ height: 500 }}>
          <LoadingSpinner />
          // </div>
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default Support
