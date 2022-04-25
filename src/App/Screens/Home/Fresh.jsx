import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

import { setDetailData, setFavourite, unSetFavourite } from '../../Store/action'
import { db } from '../../config/fbConfig'
import LoadingSpinner from '../../Components/Spinner'
import './_hits.scss'

const Fresh = () => {
  const [freshLimit, setFreshLimit] = useState(4)
  const dispatch = useDispatch()
  const { getFavourite, getFreshData, getLoad } = useSelector(
    (store) => store.appReducer
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
    <div className="hit-container">
      {getFreshData.length !== 0 && (
        <>
          <h5>Новинки</h5>

          <div className="hit-block">
            {getFreshData
              .filter((i, k) => k + 1 <= freshLimit)
              .map((item, key) => (
                <div className="hit-block__item" key={item.id}>
                  <div className="hit-block__imgblock">
                    <Carousel
                      fade
                      keyboard={false}
                      controls={false}
                      interval={key === itemId ? 1000 : null}
                      pause={false}
                      indicators={key === itemId}
                    >
                      {item.imgNcolors.map((img, index) => (
                        <Carousel.Item
                          onMouseOver={() => setItemId(key)}
                          onMouseLeave={() => setItemId(-1)}
                          className="hit-block__swiper"
                          key={img.id}
                        >
                          <Link to="detailpage">
                            <img
                              onClick={() => dispatch(setDetailData(item))}
                              src={img.imgUrl}
                              alt="img"
                            />
                          </Link>
                        </Carousel.Item>
                      ))}
                    </Carousel>

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
                            key={color.id}
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

          <button
            onClick={
              // sendData
              // () => console.log(getFreshData)
              () => setFreshLimit(freshLimit + 4)
            }
            className="hit-block__morebtn"
          >
            Еще
          </button>
        </>
      )}
    </div>
  )
}

export default Fresh