import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavourite, unSetFavourite } from '../../Store/action'

import DATA from './HitsData.json'
import './_hits.scss'

const Hits = () => {
  const [hitLimit, sethitLimit] = useState(8)
  const dispatch = useDispatch()
  const { getFavourite } = useSelector((store) => store.appReducer)
  // const cart = useSelector((state) => state)
  // const addition = (acc, currentvalue) => {
  //   return acc + currentvalue.price * currentvalue.quantity
  // }
  // const total = cart.reduce(addition, 0)

  const checkFavourite = (item) => {
    // dispatch(setFavourite(item))
    // console.log(item.id === Object.values(getFavourite)[item.id - 1].id)
    console.log(Object.values(getFavourite))
    // try {
    if (Boolean(getFavourite.length !== 0)) {
      //   const itemId = Object.values(getFavourite)[item.id - 1].id
      console.log('ok!', getFavourite)
      if (
        Boolean(item.id === Object.values(getFavourite)[Number(item.id) - 1].id)
      ) {
        // dispatch({ type: 'UNSET_FAVOURITE', payload: item })
        //   } else {
        console.log('unset')
        //     dispatch(setFavourite(item))
      }
    } else {
      console.log('SETTING')
      dispatch({ type: 'SET_FAVOURITE', payload: item })
    }
    // } catch (error) {
    // }
  }
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
                onClick={() => checkFavourite(item)}
                src={
                  // getFavourite.id === item.id
                  // ? require('../../assets/filled-heart.png')
                  require('../../assets/unfill-heart.png')
                }
              />
            </div>
            <div className="hit-block__textdiv">
              <span>{item.title}</span>
              <span>{item.price}</span>
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
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          // sethitLimit(hitLimit + 8)
          console.log(Object.values(getFavourite)[0])
          // console.log(Object.values(getFavourite))
        }}
        className="hit-block__morebtn"
      >
        Еще
      </button>
    </div>
  )
}

export default Hits
