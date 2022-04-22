import React from 'react'
import { useSelector } from 'react-redux'

import './_collection.scss'

const Collections = () => {
  const { getCollectionsData } = useSelector((state) => state.appReducer)

  const sendData = () => {}
  return (
    <section className="collections-container">
      {/* {console.log(getCollectionsData)} */}
      {getCollectionsData.length !== 0 && (
        <>
          <h5>Collections</h5>

          <div className="collections-block">
            {getCollectionsData
              .filter((i, k) => i.id + 1 <= 4)
              .map((item, key) => (
                <div className="collections-block__item" key={item.id}>
                  <img
                    src={item.allData[0]?.imgNcolors[0]?.imgUrl}
                    alt="collection item"
                  />
                  {/* {console.log(item.allData[0]?.imgNcolors[0]?.imgUrl)} */}
                </div>
              ))}
          </div>
          <button
            onClick={
              sendData
              // () => sethitLimit(hitLimit + 4)
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
