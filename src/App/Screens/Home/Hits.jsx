import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setFavourite, unSetFavourite } from '../../Store/action'
import { db } from '../../config/fbConfig'
import LoadingSpinner from '../../Components/Spinner'
import './_hits.scss'

const Hits = () => {
  const [hitLimit, sethitLimit] = useState(8)
  const dispatch = useDispatch()
  const { getFavourite, getHitData, getLoad } = useSelector(
    (store) => store.appReducer
  )

  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }
  const sendData = async () => {
    // await db
    //   .collection('Hits')
    //   .add({
    //     id: first,
    //     imgUrl: 'https://clck.ru/gM4mk',
    //     title: 'Вечернее платье',
    //     price: '1365',
    //     // discount: '730',
    //     size: '42-50',
    //     colors: [
    //       '#73A39D',
    //       '#84CC4C',
    //       '#B5A8A1',
    //       '#AB844A',
    //       '#6977F0',
    //       '#FFFFFF',
    //       '#141414',
    //       '#FF0000',
    //     ],
    //   })
    //   .then((result) => setfirst(() => first + 1))
    //   .catch((e) => console.log(e))
  }

  return (
    <div className="hit-container">
      <h5>Хит продаж</h5>

      {getLoad ? (
        <LoadingSpinner />
      ) : (
        <div className="hit-block">
          {getHitData
            .filter((i, k) => i.id <= hitLimit)
            .map((item, key) => (
              <div className="hit-block__item" key={key}>
                <div className="hit-block__imgdiv">
                  <img src={item.imgUrl} alt="product" />
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
                <div className="hit-block__textdiv">
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
              </div>
            ))}
        </div>
      )}

      <button
        onClick={() => sethitLimit(hitLimit + 4)}
        className="hit-block__morebtn"
      >
        Еще
      </button>
    </div>
  )
}

export default Hits
