import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import { Link, useNavigate } from 'react-router-dom'

import CustomPagination from '../../Components/Pagination'
import ScrollToTop from '../../Components/ScrollToTop'
import LoadingSpinner from '../../Components/Spinner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { setDetailData, setFavourite, unSetFavourite } from '../../Store/action'

import '../Home/_collection.scss'
import '../Home/_hits.scss'
import '../Home/Collections/_index.scss'
import './_index.scss'

const SearchPage = () => {
  //   --------------------------------------
  const { getFavourite, getSearchData } = useSelector(
    (store) => store.appReducer
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => getSearchData.length === 0 && navigate('/'), [])

  // ------ pagination ------
  const [currentPage, setCurrentPage] = useState(1)
  let PageSize = 8
  const currentSearchData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    return getSearchData
      ?.map((i, k) => i.allData)
      [currentPage - 1].slice(firstPageIndex, lastPageIndex)
  }, [currentPage, getSearchData])
  //   --------------------------------------
  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }
  const [itemId, setItemId] = useState(-1)
  //   --------------------------------------
  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Результаты поиска' }]} />

      <div className="container">
        {getSearchData.length !== 0 ? (
          <>
            <div className="search-container">
              <h5>Результаты поиска по запросу: {getSearchData[0].itemType}</h5>
              {/* ----------------------------------------------- */}
              <div className="collections-container__paginationblock">
                {currentSearchData.map((item, key) => (
                  <div className="hit-block__item" key={key}>
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
                            className="hit-block__swiper"
                            onMouseOver={() => setItemId(key)}
                            onMouseLeave={() => setItemId(-1)}
                            onClick={() => dispatch(setDetailData(item))}
                            key={index}
                          >
                            <Link to="/detailpage">
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
              {/* ---------------- */}
              <CustomPagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={getSearchData.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            {/* ----------------------------------------------- */}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default SearchPage
