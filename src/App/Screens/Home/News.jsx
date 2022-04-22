import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { setDetailData, setFavourite, unSetFavourite } from '../../Store/action'
import './_hits.scss'

const News = () => {
  const [newsLimit, setNewsLimit] = useState(8)
  const dispatch = useDispatch()
  const { getFavourite, getNewsData } = useSelector((store) => store.appReducer)

  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }

  return (
    <div className="hit-container">
      {getNewsData.length !== 0 && (
        <>
          <h5>Новинки</h5>

          <div className="hit-block">
            {getNewsData
              .filter((i, k) => i.id + 1 <= newsLimit)
              .map((item, key) => (
                <div className="hit-block__item" key={item.id}>
                  <div className="hit-block__imgdiv">
                    <Link to="detailpage">
                      <img
                        onClick={() => dispatch(setDetailData(item))}
                        src={item.imgUrl}
                        alt="product"
                      />
                    </Link>
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
                  </div>
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
                        {item.colors.map((color, k) => (
                          <div
                            key={k}
                            className="hit-block__color"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>

          <button
            onClick={() => setNewsLimit(newsLimit + 4)}
            className="hit-block__morebtn"
          >
            Еще
          </button>
        </>
      )}
    </div>
  )
}

export default News
