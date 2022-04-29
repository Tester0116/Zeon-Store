import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ru from 'react-phone-number-input/locale/ru.json'
import { useDispatch, useSelector } from 'react-redux'
import PhoneInput from 'react-phone-number-input'
import { useNavigate, Link } from 'react-router-dom'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import CustomSlider from '../Slider'
import Counter from '../Counter'

import {
  delCartData,
  unSetFavourite,
  setFavourite,
  setDetailData,
} from '../../Store/action'

import './_cart.scss'

const Favourite = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getCartData, getCollectionsData, getFavourite } = useSelector(
    (state) => state.appReducer
  )

  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }
  const [itemId, setItemId] = useState(-1)

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Избранное' }]} />

      <div className="container">
        {Boolean(getFavourite.length !== 0) ? (
          <div className="favourite-container">
            <h5>Избранное</h5>
            <p>Товаров в избранном: {getFavourite?.length}</p>
            <div className="hit-block">
              {getFavourite.map((item, key) => (
                <div className="hit-block__item" key={item.id}>
                  <div className="hit-block__imgblock">
                    <CustomSlider
                      detailData={item}
                      sliderImage={item.imgNcolors}
                    />

                    <img
                      style={{ cursor: 'pointer' }}
                      onClick={() => checkFavourite(item, key)}
                      src={
                        getFavourite?.map((i, k) => i.id).includes(item.id)
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
                            ((item.price - item.discount) / item.discount) * 100
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
            <div className="hit-block hit-block__categories">
              {getCollectionsData[0]?.allData
                .filter((i, k) => k < 5)
                .map((item, key) => (
                  <div className="hit-block__item" key={item.id}>
                    <div className="hit-block__imgblock  nth-five">
                      <CustomSlider
                        detailData={item}
                        sliderImage={item.imgNcolors}
                      />

                      <img
                        style={{ cursor: 'pointer' }}
                        onClick={() => checkFavourite(item, key)}
                        src={
                          getFavourite?.map((i, k) => i.id).includes(item.id)
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
                              ((item.price - item.discount) / item.discount) *
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
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default Favourite
