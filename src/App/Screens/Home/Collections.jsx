import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoriesData } from '../../Store/action'

import './_collection.scss'

const Collections = () => {
  const navigate = useNavigate()

  const { getCollectionsData } = useSelector((state) => state.appReducer)
  const dispatch = useDispatch()

  const ScrollHandler = (e) =>
    e.target.documentElement.scrollTop < 100 && setCollectionLimit(4)

  useEffect(() => {
    document.addEventListener('scroll', ScrollHandler)

    return () => {
      document.removeEventListener('scroll', ScrollHandler)
    }
  }, [])

  const [collectionLimit, setCollectionLimit] = useState(4)

  return (
    <section className="collections-container">
      {getCollectionsData.length !== 0 && (
        <>
          <h4 style={{ alignSelf: 'center' }}>Коллекция</h4>

          <div className="collections-block">
            {getCollectionsData
              .filter((i, k) => k + 1 <= collectionLimit)
              .map((item, key) => (
                <div className="collections-block__item" key={key}>
                  <img
                    src={item.allData[0]?.imgNcolors[2]?.imgUrl}
                    alt="collection item"
                  />
                  <span>{item.itemType}</span>
                  <button
                    onClick={() => {
                      dispatch(setCategoriesData(item))
                      navigate('/collections/categories')
                    }}
                  >
                    <span>Смотреть все</span>
                    <div></div>
                  </button>
                </div>
              ))}
          </div>
          {collectionLimit <= getCollectionsData.length && (
            <button
              onClick={() => setCollectionLimit(collectionLimit + 4)}
              className="hit-block__morebtn"
            >
              Еще
            </button>
          )}
          <span />
        </>
      )}
    </section>
  )
}

export default Collections
