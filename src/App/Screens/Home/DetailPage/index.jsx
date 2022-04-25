import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import LoadingSpinner from '../../../Components/Spinner'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'

import {
  setCartData,
  setDetailData,
  setFavourite,
  unSetFavourite,
} from '../../../Store/action'

import './_index.scss'

const DetailPage = (props) => {
  const { getFavourite, getDetailData, getCartData, getCollectionsData } =
    useSelector((store) => store.appReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (getDetailData.length === 0) navigate('/', { replace: true })
  }, [])

  const [itemId, setItemId] = useState(-1)

  const breadCrums = [
    { id: 2, text: 'Коллекция' },
    { id: 1, text: getDetailData.itemType },
    { id: 0, text: getDetailData.title },
  ]

  const AddCart = () => {
    const index = getCartData?.map((i, k) => i.id)

    if (Boolean(getCartData.length !== 0)) {
      if (Boolean(index.includes(getDetailData.id))) navigate('/cart')
      else dispatch(setCartData(getDetailData))
    } else dispatch(setCartData(getDetailData))
  }
  const AddFavourite = () => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(getDetailData.id)))
        dispatch(unSetFavourite(getDetailData))
      else dispatch(setFavourite(getDetailData))
    } else dispatch(setFavourite(getDetailData))
  }

  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }
  return (
    <section>
      <Header breadCrums={breadCrums} />
      {getDetailData.length !== 0 ? (
        <div className="container">
          {/* -------------------------- */}
          <div className="detail-container">
            <div className="detail-container__imgblock">
              <div className="detail-container__firstimg">
                {getDetailData.imgNcolors.slice(0, 4).map((i, k) => (
                  <img src={i.imgUrl} alt="detail img" />
                ))}
              </div>
              <div className="detail-container__secondimg">
                {getDetailData.imgNcolors
                  .slice(4, getDetailData.imgNcolors.length)
                  .map((i, k) => (
                    <img src={i.imgUrl} alt="detail img" />
                  ))}
              </div>
            </div>
            {/* ------------------------------------- */}
            <div className="detail-container__aboutblock">
              <h4>{getDetailData.title}</h4>
              {/* --------------- */}
              <div className="fdrow detail-container__aboutarticle">
                <span>Артикул: </span>
                <span>{getDetailData.article}</span>
              </div>
              {/* --------------- */}
              <div className="fdrow detail-container__aboutcolors">
                <span>Цвет: </span>
                <div className="fdrow">
                  {getDetailData.imgNcolors.map((i, k) => (
                    <div className="detail-container__coloritems" key={i.id}>
                      <div style={{ backgroundColor: i.color }} />
                    </div>
                  ))}
                </div>
              </div>
              {/* --------------- */}
              <div className="fdrow detail-container__aboutprice">
                <span>{getDetailData.price} p</span>
                <span>{getDetailData.discount} p</span>
              </div>
              {/* --------------- */}
              <div className="detail-container__abouttext">
                <span>О товаре:</span>
                <p>{getDetailData.about}</p>
              </div>
              {/* --------------- */}
              <div className="detail-container__aboutinfo">
                <div>
                  <div className="fdrow">
                    <span className="detail-container__aboutinfo-key">
                      Размерный ряд:
                    </span>
                    <span className="detail-container__aboutinfo-value">
                      {getDetailData.size}
                    </span>
                  </div>
                  <div className="fdrow mt15">
                    <span className="detail-container__aboutinfo-key">
                      Количество в линейке:
                    </span>
                    <span className="detail-container__aboutinfo-value">
                      {getDetailData.count}
                    </span>
                  </div>
                </div>
                {/* ----- */}
                <div>
                  <div className="fdrow">
                    <span className="detail-container__aboutinfo-key">
                      Состав ткани:
                    </span>
                    <span className="detail-container__aboutinfo-value">
                      {getDetailData.fabric}
                    </span>
                  </div>
                  <div className="fdrow mt15">
                    <span className="detail-container__aboutinfo-key">
                      Материал:
                    </span>
                    <span className="detail-container__aboutinfo-value">
                      {getDetailData.material}
                    </span>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <div className="fdrow detail-container__addCartblock">
                <button onClick={() => AddCart()}>
                  {getCartData
                    ?.map((i, k) => i.id)
                    .includes(getDetailData.id) ? (
                    <span>Перейти в корзине</span>
                  ) : (
                    <>
                      <img
                        src={require('../../../assets/white-cart.png')}
                        alt="cart icon"
                      />
                      <span>Добавить в корзину</span>
                    </>
                  )}
                </button>
                <button onClick={() => AddFavourite()}>
                  <img
                    style={{ cursor: 'pointer' }}
                    src={
                      getFavourite
                        ?.map((i, k) => i.id)
                        .includes(getDetailData.id)
                        ? require('../../../assets/filled-white-heart.png')
                        : require('../../../assets/unfill-heart.png')
                    }
                    alt="heart-icon"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------- */}

          {/* -------------------------- */}
          <h5 style={{ marginTop: 52 }}>Похожие товары</h5>
          <div className="hit-block hit-block__categories">
            {getCollectionsData[0]?.allData
              .filter((i, k) => i.title === getDetailData.title)
              .filter((i, k) => k <= 4)
              .map((item, key) => (
                <div className="hit-block__item" key={item.id}>
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
                          key={img.id}
                        >
                          <Link to="detailpage">
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
                            ((item.price - item.discount) / item.discount) * 100
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
          {/* -------------------------- */}
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </section>
  )
}

export default DetailPage
