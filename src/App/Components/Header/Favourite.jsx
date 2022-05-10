import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import CustomSlider from '../Slider'

import {
  unSetFavourite,
  setFavourite,
  setDetailData,
  setCollectionsData,
  setHitData,
  setFreshData,
  setBenefitData,
  setHomeBanner,
  setNewsData,
  setLoad,
} from '../../Store/action'
import { db } from '../../config/fbConfig'

import './_cart.scss'

const Favourite = () => {
  const dispatch = useDispatch()
  const { getCollectionsData, getFavourite } = useSelector(
    (state) => state.appReducer
  )

  const checkFavourite = (item, key) => {
    const index = getFavLocale?.map((i, k) => i.id)

    if (Boolean(getFavLocale.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }

  const [getFavLocale, setFavLocale] = useState([])
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('Favourite'))
      setFavLocale(data)
    } catch (e) {
      console.log(e)
    }
  }, [getFavourite])

  useEffect(() => {
    // ----- Getting Collections Data -----
    db.collection('Collections').onSnapshot((snapshot) => {
      const coll = snapshot.docs.map((doc) => doc.data())
      let time = 0
      while (time <= 57) {
        coll.splice(coll.length - 1, 0, coll[0])
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
    setTimeout(() => dispatch(setLoad(false)), 5000)
  }, [])

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Избранное' }]} />

      <div className="container">
        {getFavLocale !== null && getFavLocale.length !== 0 ? (
          <div className="favourite-container">
            <h5>Избранное</h5>
            <p>Товаров в избранном: {getFavLocale?.length}</p>
            <div className="hit-block">
              {getFavLocale.map((item, key) => (
                <div className="hit-block__item" key={item.id}>
                  <div className="hit-block__imgblock">
                    <CustomSlider
                      detailData={item}
                      sliderImage={item.imgNcolors}
                    />

                    <img
                      style={{ cursor: 'pointer', zIndex: 98 }}
                      onClick={() => checkFavourite(item, key)}
                      src={
                        getFavLocale?.map((i, k) => i.id).includes(item.id)
                          ? require('../../assets/filled-heart.png')
                          : require('../../assets/unfill-heart.png')
                      }
                      alt="heart-icon"
                    />
                    {item.discount && (
                      <>
                        <img
                          className="hit-block__discount-img"
                          src={require('../../assets/discount-icon.png')}
                          alt="block__discount"
                        />
                        <span className="hit-block__discount-procent">
                          {Math.round(
                            ((item.discount - item.price) / item.discount) * 100
                          )}
                          %
                        </span>
                      </>
                    )}
                  </div>
                  {/* ---- end img block ----- */}
                  <Link to="detailpage">
                    <div
                      onClick={() => dispatch(setDetailData(item))}
                      className="hit-block__textdiv"
                    >
                      <span>{item.title}</span>
                      <div>
                        <span>{item.price} p</span>
                        {item.discount && (
                          <span className="hit-block__discount">
                            {item.discount} p
                          </span>
                        )}
                      </div>
                      <span>Размер: {item.size}</span>
                      <div className="hit-block__colorsblock">
                        {item.imgNcolors.map((color, k) => (
                          <div
                            key={k}
                            className="hit-block__color"
                            style={{ backgroundColor: color.color }}
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="emptycart-container">
            <h5>Избранное</h5>
            <p>У Вас пока нет избранных товаров</p>
            <h4>Возможно Вас заинтересует</h4>
            <div className="categories-container">
              <div className="hit-block hit-block__categories">
                {getCollectionsData[0]?.allData
                  .filter((i, k) => k < 5)
                  .map((item, key) => (
                    <div className="hit-block__item" key={item.id}>
                      <div className="hit-block__imgblock  nth-five">
                        <CustomSlider
                          detailData={item}
                          sliderImage={item.imgNcolors}
                          nthFive
                        />

                        <img
                          style={{ cursor: 'pointer', zIndex: 98 }}
                          onClick={() => checkFavourite(item, key)}
                          src={
                            getFavLocale?.map((i, k) => i.id).includes(item.id)
                              ? require('../../assets/filled-heart.png')
                              : require('../../assets/unfill-heart.png')
                          }
                          alt="heart-icon"
                        />
                        {item.discount && (
                          <>
                            <img
                              className="hit-block__discount-img"
                              src={require('../../assets/discount-icon.png')}
                              alt="block__discount"
                            />
                            <span className="hit-block__discount-procent">
                              {Math.round(
                                ((item.discount - item.price) / item.discount) *
                                  100
                              )}
                              %
                            </span>
                          </>
                        )}
                      </div>
                      {/* ---- end img block ----- */}
                      <Link to="/detailpage">
                        <div
                          onClick={() => dispatch(setDetailData(item))}
                          className="hit-block__textdiv"
                        >
                          <span>{item.title}</span>
                          <div>
                            <span>{item.price} p</span>
                            {item.discount && (
                              <span className="hit-block__discount">
                                {item.discount} p
                              </span>
                            )}
                          </div>
                          <span>Размер: {item.size}</span>
                          <div className="hit-block__colorsblock">
                            {item.imgNcolors.map((color, k) => (
                              <div
                                key={k}
                                className="hit-block__color"
                                style={{ backgroundColor: color.color }}
                              />
                            ))}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default Favourite
