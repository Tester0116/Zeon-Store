import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { setCategoriesData, setCollectionsData } from '../../../Store/action'
import CustomPagination from '../../../Components/Pagination'
import ScrollToTop from '../../../Components/ScrollToTop'
import LoadingSpinner from '../../../Components/Spinner'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import { db } from '../../../config/fbConfig'

import '../_collection.scss'
import './_index.scss'

const CollectionScreen = () => {
  const navigate = useNavigate()
  const { getCollectionsData } = useSelector((store) => store.appReducer)
  const dispatch = useDispatch()
  // ------ pagination ------
  const [currentPage, setCurrentPage] = useState(1)
  let PageSize = 8
  const currentCollectionData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return getCollectionsData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, getCollectionsData])

  getCollectionsData.length === 0 &&
    db
      .collection('Collections')
      .onSnapshot((snapshot) =>
        dispatch(setCollectionsData(snapshot.docs.map((doc) => doc.data())))
      )

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Коллекции' }]} />

      <div className="container">
        {getCollectionsData.length !== 0 ? (
          <div className="collections-container">
            <h5>Коллекции</h5>
            <div className="collections-container__paginationblock">
              {currentCollectionData
                .sort((a, b) => b.id - a.id)
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
                        navigate('categories')
                      }}
                    >
                      <span>Смотреть все</span>
                      <div></div>
                    </button>
                  </div>
                ))}
            </div>
            <CustomPagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={getCollectionsData.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default CollectionScreen
