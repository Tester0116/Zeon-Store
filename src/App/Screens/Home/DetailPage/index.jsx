import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import LoadingSpinner from '../../../Components/Spinner'
import CustomSlider from '../../../Components/Slider'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'

import {
  setCartData,
  setDetailData,
  setFavourite,
  unSetFavourite,
} from '../../../Store/action'

import './_index.scss'

const DetailPage = () => {
  const { getFavourite, getDetailData, getCartData, getCollectionsData } =
    useSelector((store) => store.appReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (getDetailData.length === 0) navigate('/', { replace: true })
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [getDetailData])

  const [colorOver, setColorOver] = useState(-1)
  const [colorClicked, setColorClicked] = useState(
    getDetailData?.imgNcolors[0]?.color
  )
  const [imgUrl, setImgUrl] = useState(getDetailData?.imgNcolors[0]?.imgUrl)

  const breadCrums = [
    { id: 2, text: 'Коллекция' },
    { id: 1, text: getDetailData.itemType },
    { id: 0, text: getDetailData.title },
  ]

  const AddCart = () => {
    const body = {
      ...getDetailData,
      selectedColor: colorClicked,
      counter: 1,
      selectedImg: imgUrl,
    }

    if (getCartData.length !== 0) {
      //    ----------
      if (
        getCartData?.find((i, k) => i.id === getDetailData.id) &&
        getCartData?.find((i, k) => i.selectedColor === colorClicked)
      )
        navigate('/cart')
      else dispatch(setCartData(body))
      //    ----------
    } else dispatch(setCartData(body))
  }
  // -----------------------------------------
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
            {window.innerWidth < 600 ? (
              <div className="detail-container__mini-imgblock">
                {getDetailData.imgNcolors.map((i, k) => (
                  <img
                    onMouseOver={() => setColorOver(i.id - 1)}
                    onMouseOut={() => setColorOver(-1)}
                    src={i.imgUrl}
                    alt="detail img"
                    key={i.id}
                  />
                ))}
              </div>
            ) : (
              <div className="detail-container__imgblock">
                <div className="detail-container__firstimg">
                  {getDetailData.imgNcolors.slice(0, 4).map((i, k) => (
                    <img
                      className={colorOver === i.id ? 'hovered' : undefined}
                      onMouseOver={() => setColorOver(i.id)}
                      onMouseOut={() => setColorOver(-1)}
                      src={i.imgUrl}
                      alt="detail img"
                      key={i.id}
                    />
                  ))}
                </div>
                <div className="detail-container__secondimg">
                  {getDetailData.imgNcolors
                    .slice(4, getDetailData.imgNcolors.length)
                    .map((i, k) => (
                      <img
                        className={colorOver === i.id ? 'hovered' : undefined}
                        onMouseOver={() => setColorOver(i.id)}
                        onMouseOut={() => setColorOver(-1)}
                        src={i.imgUrl}
                        alt="detail img"
                        key={i.id}
                      />
                    ))}
                </div>
              </div>
            )}
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
                    <div
                      className={
                        colorClicked === i.color
                          ? 'detail-container__coloritems hovered'
                          : colorOver === i.id
                          ? 'detail-container__coloritems hovered'
                          : 'detail-container__coloritems'
                      }
                      onMouseOver={() => setColorOver(i.id)}
                      onMouseOut={() => setColorOver(-1)}
                      onClick={() => {
                        setColorClicked(i.color)
                        setImgUrl(i.imgUrl)
                      }}
                      key={i.id}
                    >
                      <div style={{ backgroundColor: i.color }} />
                    </div>
                  ))}
                </div>
              </div>
              {/* --------------- */}
              <div className="fdrow detail-container__aboutprice">
                <span>{getDetailData.price} p</span>
                {getDetailData.discount && (
                  <span className="hit-block__discount">
                    {getDetailData.discount} p
                  </span>
                )}
                <span />
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
                  {getCartData?.find((i, k) => i.id === getDetailData.id) &&
                  getCartData?.find(
                    (i, k) => i.selectedColor === colorClicked
                  ) ? (
                    <span onClick={() => AddCart()}>Перейти в корзине</span>
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
          <div className="categories-container">
            <div className="hit-block hit-block__categories">
              {getCollectionsData[0]?.allData
                .filter((i, k) => i.title === getDetailData.title)
                .filter((i, k) => i.id !== getDetailData.id)
                .filter((i, k) => k <= 4)
                .map((item, key) => (
                  <div className="hit-block__item" key={item.id}>
                    <div className="hit-block__imgblock nth-five">
                      <CustomSlider
                        detailData={item}
                        sliderImage={item.imgNcolors}
                        nthFive
                      />

                      <img
                        style={{ cursor: 'pointer', zIndex: 500 }}
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
