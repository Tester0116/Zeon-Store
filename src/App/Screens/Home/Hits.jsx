import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavourite } from '../../Store/action'

import DATA from './HitsData.json'
import './_hits.scss'

const Hits = () => {
  const [hitLimit, sethitLimit] = useState(8)
  const dispatch = useDispatch()
  const { getFavourite } = useSelector((store) => store.appReducer)

  return (
    <div className="hit-container">
      <h5>Хит продаж</h5>
      <div className="hit-block">
        {DATA.filter((i, k) => i.id <= hitLimit).map((item, key) => (
          <div className="hit-block__item" key={key}>
            <div className="hit-block__imgdiv">
              <img src={item.imgurl} />
              <img
                style={{ cursor: 'pointer' }}
                onClick={(...prev) => dispatch(setFavourite(item))}
                src={
                  getFavourite.id === item.id
                    ? require('../../assets/filled-heart.png')
                    : require('../../assets/unfill-heart.png')
                }
              />
            </div>
            <div className="hit-block__textdiv">
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span>Размер: {item.size}</span>
              <div className="hit-block__colorsblock">
                {item.colors.map((i, k) => (
                  <div
                    key={k}
                    className="hit-block__color"
                    style={{ backgroundColor: i }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          sethitLimit(hitLimit + 8)
        }}
        className="hit-block__morebtn"
      >
        Еще
      </button>
    </div>
  )
}

export default Hits
