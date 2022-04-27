import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ScrollToTop from '../../Components/ScrollToTop'
import LoadingSpinner from '../../Components/Spinner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import { setNewsData } from '../../Store/action'
import { db } from '../../config/fbConfig'

import './_index.scss'

const News = () => {
  const dispatch = useDispatch()

  const { getNewsData } = useSelector((state) => state.appReducer)
  useEffect(() => {
    // ----- Getting About Data -----
    db.collection('News').onSnapshot((snapshot) =>
      dispatch(setNewsData(snapshot.docs.map((doc) => doc.data())))
    )
  }, [])

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Публичная оферта' }]} />

      <div className="container">
        <div className="news-container">
          <h4>Новости</h4>
          {Boolean(getNewsData.length !== 0) ? (
            getNewsData.map((item, key) => (
              <div
                className="news-container__block"
                style={{
                  marginTop: key === 0 ? 25 : 12,
                  marginBottom: getNewsData.length === key + 1 ? 50 : 0,
                }}
              >
                <img src={item.imgUrl} alt="news img" />
                <div className="fdcol">
                  <span>{item.title}</span>
                  <p>{item.discription}</p>
                </div>
              </div>
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default News
