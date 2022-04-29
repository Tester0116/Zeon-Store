import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import CustomPagination from '../../../Components/Pagination'
import ScrollToTop from '../../../Components/ScrollToTop'
import LoadingSpinner from '../../../Components/Spinner'
import CustomSlider from '../../../Components/Slider'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import {
  setDetailData,
  setFavourite,
  unSetFavourite,
} from '../../../Store/action'

import '../_collection.scss'
import '../_hits.scss'
import './_index.scss'

const Categories = () => {
  //   --------------------------------------
  const { getCategoriesData, getFavourite, getFreshData } = useSelector(
    (store) => store.appReducer
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => getCategoriesData.length === 0 && navigate('/'), [])

  // ------ pagination ------
  const [currentPage, setCurrentPage] = useState(1)
  let PageSize = 12
  const currentCategoriesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return getCategoriesData?.allData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, getCategoriesData])
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
      <Header
        breadCrums={[
          { id: 1, text: 'Коллекции' },
          { id: 0, text: getCategoriesData?.itemType },
        ]}
      />

      <div className="container">
        {getCategoriesData?.length !== 0 ? (
          <>
            <div className="collections-container">
              <h5>{getCategoriesData.itemType}</h5>
              {/* ----------------------------------------------- */}
              <div className="collections-container__paginationblock">
                {currentCategoriesData?.map((item, key) => (
                  <div className="hit-block__item" key={key}>
                    <div className="hit-block__imgblock">
                      <CustomSlider
                        detailData={item}
                        sliderImage={item.imgNcolors}
                      />

                      <img
                        style={{ cursor: 'pointer' }}
                        onClick={() => checkFavourite(item, key)}
                        src={
                          getFavourite?.map((i, k) => i.id).includes(item.id)
                            ? require('../../../assets/filled-heart.png')
                            : require('../../../assets/unfill-heart.png')
                        }
                        alt="heart-icon"
                      />
                      {item.discount && (
                        <>
                          <img
                            className="hit-block__discount-img"
                            src={require('../../../assets/discount-icon.png')}
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
                totalCount={getCategoriesData?.allData.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            {/* ----------------------------------------------- */}
            {getFreshData.length !== 0 && (
              <div className="fresh-block">
                <h5>Новинки</h5>
                <div className="hit-block hit-block__categories">
                  {getFreshData
                    .filter((i, k) => k + 1 <= 5)
                    .map((item, key) => (
                      <div className="hit-block__item" key={item.id}>
                        <div className="hit-block__imgblock  nth-five">
                          <CustomSlider
                            detailData={item}
                            sliderImage={item.imgNcolors}
                          />

                          <img
                            style={{ cursor: 'pointer' }}
                            onClick={() => checkFavourite(item, key)}
                            src={
                              getFavourite
                                ?.map((i, k) => i.id)
                                .includes(item.id)
                                ? require('../../../assets/filled-heart.png')
                                : require('../../../assets/unfill-heart.png')
                            }
                            alt="heart-icon"
                          />
                          {item.discount && (
                            <>
                              <img
                                className="hit-block__discount-img"
                                src={require('../../../assets/discount-icon.png')}
                                alt="block__discount"
                              />
                              <span className="hit-block__discount-procent">
                                {Math.round(
                                  ((item.price - item.discount) /
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
            )}
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

export default Categories
