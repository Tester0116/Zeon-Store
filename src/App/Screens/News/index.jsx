import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
  //
  //
  //
  const [newsLimit, setNewsLimit] = useState(8)

  const [activeIndex, setActiveIndex] = useState(1)

  const ScrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      150
    ) {
      setNewsLimit(newsLimit + 8)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', ScrollHandler)

    return () => {
      document.removeEventListener('scroll', ScrollHandler)
    }
  }, [])

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Публичная оферта' }]} />

      <div className="container">
        <div className="news-container">
          <h4>Новости</h4>
          {Boolean(getNewsData.length !== 0) ? (
            <TransitionGroup className="cart-item-block">
              {getNewsData
                .filter((i, k) => k < newsLimit)
                .map((item, key) => (
                  <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames="cart-item"
                  >
                    <div
                      className="news-container__block"
                      style={{ marginTop: key === 0 ? 25 : 12 }}
                      key={item.id}
                    >
                      <img src={item.imgUrl} alt="news img" />
                      <div className="fdcol">
                        <span>{item.title}</span>
                        <div
                          className={
                            activeIndex === key
                              ? 'discription-block active'
                              : 'discription-block'
                          }
                        >
                          <p>{item.discription}</p>
                        </div>
                      </div>
                      <button
                        style={{
                          display:
                            window.innerWidth > 600
                              ? 'none'
                              : activeIndex === key
                              ? 'none'
                              : 'block',
                        }}
                        type="button"
                        onClick={() => setActiveIndex(key)}
                      >
                        Читать полностью
                      </button>
                    </div>
                  </CSSTransition>
                ))}
            </TransitionGroup>
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
