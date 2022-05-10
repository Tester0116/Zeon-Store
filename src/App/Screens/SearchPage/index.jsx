import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CustomPagination from '../../Components/Pagination'
import ScrollToTop from '../../Components/ScrollToTop'
import CustomSlider from '../../Components/Slider'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import { setDetailData, setFavourite, unSetFavourite } from '../../Store/action'

import '../Home/_collection.scss'
import '../Home/_hits.scss'
import '../Home/Collections/_index.scss'
import './_index.scss'

const SearchPage = () => {
  //   --------------------------------------
  const { getFavourite, getSearchData, getFreshData } = useSelector(
    (store) => store.appReducer
  )
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (getSearchData.length === 0)  navigate('/', { replace: true })
  // }, [])

  // ------ pagination ------
  const [currentPage, setCurrentPage] = useState(1)
  let PageSize = 8
  const currentSearchData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    return getSearchData?.allData?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, getSearchData])
  //   --------------------------------------
  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }
  //   --------------------------------------

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  // -----------------
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [currentPage])

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Результаты поиска' }]} />

      <div className="container">
        {getSearchData !== undefined && getSearchData?.length !== 0 ? (
          <>
            <div className="search-container">
              <h5>Результаты поиска по запросу: {getSearchData.searchText}</h5>
              {/* ----------------------------------------------- */}
              <div className="collections-container__paginationblock">
                {currentSearchData?.map((item, key) => (
                  <div className="hit-block__item" key={key}>
                    <div className="hit-block__imgblock">
                      <CustomSlider
                        detailData={item}
                        sliderImage={item.imgNcolors}
                      />

                      <img
                        style={{ cursor: 'pointer', zIndex: 98 }}
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
                              ((item.discount - item.price) / item.discount) *
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
                totalCount={getSearchData?.allData?.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            {/* ----------------------------------------------- */}
          </>
        ) : (
          getFreshData.length !== 0 && (
            <>
              <h4 className="search-container h4">
                Результаты поиска по запросу: {getSearchData.searchText}
              </h4>
              <p>По Вашему запросу ничего не найдено.</p>
              <div className="fresh-block" style={{ marginTop: 44 }}>
                <h5>Возможно Вас заинтересует</h5>
                <div className="categories-container">
                  <div className="hit-block hit-block__categories">
                    {getFreshData
                      ?.filter((i, k) => k + 1 <= 5)
                      .map((item, key) => (
                        <div className="hit-block__item" key={item.id}>
                          <div className="hit-block__imgblock  nth-five">
                            <CustomSlider
                              detailData={item}
                              sliderImage={item.imgNcolors}
                              nthFive
                            />

                            <img
                              style={{ cursor: 'pointer', zIndex: 98 }}
                              onClick={() => checkFavourite(item, key)}
                              src={
                                getFavourite
                                  ?.map((i, k) => i.id)
                                  .includes(item.id)
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
                                    ((item.discount - item.price) /
                                      item.discount) *
                                      100
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
                </div>
              </div>
            </>
          )
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default SearchPage
