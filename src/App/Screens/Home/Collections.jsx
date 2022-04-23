import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './_collection.scss'

const Collections = () => {
  const { getCollectionsData } = useSelector((state) => state.appReducer)
  const [collectionLimit, setCollectionLimit] = useState(4)

  const sendData = () => {}

  return (
    <section className="collections-container">
      {/* {console.log(getCollectionsData)} */}
      {getCollectionsData.length !== 0 && (
        <>
          <h5>Collections</h5>

          <div className="collections-block">
            {getCollectionsData
              .filter((i, k) => i.id + 1 <= collectionLimit)
              .map((item, key) => (
                <div className="collections-block__item" key={item.id}>
                  <img
                    src={item.allData[0]?.imgNcolors[2]?.imgUrl}
                    alt="collection item"
                  />
                  <span>{item.itemType}</span>
                  <button
                    onClick={
                      sendData
                      // () => console.log(randomize)
                      // () => sethitLimit(hitLimit + 4)
                    }
                  >
                    <span>Смотреть все</span>
                    <div></div>
                  </button>
                </div>
              ))}
          </div>
          <button
            onClick={
              // sendData
              // () => console.log(randomize)
              () => setCollectionLimit(collectionLimit + 4)
            }
            className="hit-block__morebtn"
          >
            Еще
          </button>
        </>
      )}
    </section>
  )
}

export default Collections
