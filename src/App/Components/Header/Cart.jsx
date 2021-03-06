import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ru from 'react-phone-number-input/locale/ru.json'
import { useDispatch, useSelector } from 'react-redux'
import PhoneInput from 'react-phone-number-input'
import { useNavigate, Link } from 'react-router-dom'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import CustomSlider from '../Slider'
import Counter from '../Counter'

import {
  delCartData,
  unSetFavourite,
  setFavourite,
  setDetailData,
  unSetCartData,
  setBenefitData,
  setCollectionsData,
  setHomeBanner,
  setNewsData,
  setFreshData,
  setHitData,
  setLoad,
} from '../../Store/action'

import 'react-phone-number-input/style.css'
import './_cart.scss'
import { db } from '../../config/fbConfig'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getCartData, getCollectionsData, getFavourite } = useSelector(
    (state) => state.appReducer
  )

  const [getCartLocale, setGetCartLocale] = useState([])
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('CartData'))
      setGetCartLocale(data)
    } catch (e) {
      console.log(e)
    }
  }, [getCartData])

  useEffect(() => {
    // ----- Getting Collections Data -----
    db.collection('Collections').onSnapshot((snapshot) => {
      const coll = snapshot.docs.map((doc) => doc.data())
      let time = 0
      while (time <= 57) {
        coll.splice(coll.length - 1, 0, coll[0])
        time++
      }
      dispatch(setCollectionsData(coll))
      // ---------- setting Hit Data ----------
      const HitData = snapshot.docs.map((doc) =>
        doc.data().allData.filter((i) => i.hit === true)
      )
      dispatch(setHitData(HitData[0]))

      // ---------- setting Frsh Data ----------
      const FreshData = snapshot.docs.map((doc) =>
        doc.data().allData.filter((i) => i.new === true)
      )
      dispatch(setFreshData(FreshData[0]))
    })
    // ----- Getting Benefit Data -----
    db.collection('Benefits').onSnapshot((snapshot) =>
      dispatch(setBenefitData(snapshot.docs.map((doc) => doc.data())))
    )
    // ----- Getting Home Banner -----
    db.collection('HomeBanner').onSnapshot((snapshot) =>
      dispatch(setHomeBanner(snapshot.docs.map((doc) => doc.data())))
    )
    // ----- Getting News Data -----
    db.collection('News').onSnapshot((snapshot) =>
      dispatch(setNewsData(snapshot.docs.map((doc) => doc.data())))
    )
    setTimeout(() => dispatch(setLoad(false)), 5000)
  }, [])

  // Modal useState start
  const [Modal, setModal] = useState(false)

  const [name, setName] = useState('')
  // -------
  const [secondName, setSecondName] = useState('')
  // -------
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  // -------
  const [phone, setPhone] = useState('')
  const [phoneDirty, setPhoneDirty] = useState(false)
  // -------
  const [country, setCountry] = useState('')
  // -------
  const [city, setCity] = useState('')
  // -------
  const [checked, setChecked] = useState(false)
  // -------
  const [sended, setSended] = useState(false)
  // -------
  const [isDisabled, setIsDisabled] = useState(true)
  // -------

  const EmailHandler = (e) => {
    setEmail(e.target.value)

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!re.test(String(e.target.value).toLowerCase())) setEmailDirty(true)
    else setEmailDirty(false)
  }

  const PhoneHandler = (e) => {
    if (e?.length <= 12) setPhoneDirty(true)
    else {
      setPhoneDirty(false)
      setPhone(e)
    }
  }
  // check modal Send button
  useEffect(() => {
    if (name === '') setIsDisabled(true)
    else if (secondName === '') setIsDisabled(true)
    else if (email === '') setIsDisabled(true)
    else if (emailDirty) setIsDisabled(true)
    else if (phone === undefined) setIsDisabled(true)
    else if (phoneDirty) setIsDisabled(true)
    else if (city === '') setIsDisabled(true)
    else if (country === '') setIsDisabled(true)
    else if (!checked) setIsDisabled(true)
    else setIsDisabled(false)
  }, [
    name,
    secondName,
    email,
    emailDirty,
    city,
    country,
    phoneDirty,
    checked,
    phone,
  ])
  // Modal useState end
  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }

  const cost = getCartLocale?.reduce(
    (i, k) => i + (k.discount !== undefined && Number(k.discount * k.counter)),
    0
  )
  const totalDiscount = getCartLocale?.reduce(
    (i, k) => i + Number(k.price * k.counter),
    0
  )

  return (
    <section>
      <Header breadCrums={[{ id: 0, text: '??????????????' }]} />
      {Modal && (
        <div className="modal-container">
          {sended ? (
            <div className="modal-container__formsended-block">
              <img
                src={require('../../assets/thank-icon.png')}
                alt="thank icon"
              />
              <h5>??????????????!</h5>
              <span>
                {`???????? ???????????? ???????? ?????????????? ????????????????, 
                ?????????? ?????? ????????????????????`}
              </span>
              <button
                style={{ marginTop: 0 }}
                className="modal-container__sendbtn"
                onClick={() => navigate('/')}
              >
                ???????????????????? ??????????????
              </button>
            </div>
          ) : (
            <div className="modal-container__block">
              <div className="fdrow">
                <h5>???????????????????? ????????????</h5>
                <img
                  onClick={() => setModal(false)}
                  src={require('../../assets/close-icon.png')}
                  alt="close icon"
                />
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                {/* ----- name ----- */}
                <div className="fdcol">
                  <label htmlFor="name">???????? ??????</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="???????????????? ????????"
                  />
                </div>
                {/* ----- Second Name ----- */}
                <div className="fdcol">
                  <label htmlFor="secondName">???????? ??????????????</label>
                  <input
                    id="secondName"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                    required
                    placeholder="???????????????? ????????????"
                  />
                </div>
                {/* ----- Email ----- */}
                <div className="fdcol">
                  <label
                    htmlFor="email"
                    style={{
                      borderColor: emailDirty ? '#E5271B' : '#808080',
                      color: emailDirty ? '#E5271B' : '#808080',
                    }}
                  >
                    ?????????????????????? ??????????
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={EmailHandler}
                    required
                    type="email"
                    placeholder="example@mail.com"
                  />
                </div>
                {/* ----- Phone ----- */}
                <div className="fdcol">
                  <label
                    htmlFor="phone"
                    style={{
                      color: phoneDirty ? '#E5271B' : '#808080',
                    }}
                  >
                    ?????? ?????????? ????????????????
                  </label>
                  <PhoneInput
                    id="phone"
                    value={phone}
                    labels={ru}
                    required
                    defaultCountry="KG"
                    international
                    countryCallingCodeEditable={false}
                    className="inputs"
                    onChange={PhoneHandler}
                  />
                </div>
                {/* ----- Country ----- */}
                <div className="fdcol">
                  <label htmlFor="country">????????????</label>
                  <input
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    placeholder="?????????????? ????????????"
                  />
                </div>
                {/* ----- City ----- */}
                <div className="fdcol">
                  <label htmlFor="city">??????????</label>
                  <input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    placeholder="?????????????? ??????????"
                  />
                </div>
                {/* ---------- Offer ---------- */}
                <div className="fdrow">
                  <input
                    type="checkbox"
                    id="checkbox-id"
                    required
                    onClick={(e) => setChecked(e.target.checked)}
                  />
                  <label htmlFor="checkbox-id">???????????????? ?? ?????????????????? </label>
                  <span onClick={() => navigate('/offer')}>
                    ?????????????????? ????????????
                  </span>
                </div>
                {/* ---------- button ---------- */}
                <button
                  className="modal-container__sendbtn"
                  disabled={isDisabled}
                  onClick={() => {
                    setSended(true)
                    dispatch(unSetCartData([]))
                    localStorage.removeItem('CartData')
                  }}
                >
                  ????????????????
                </button>
              </form>
            </div>
          )}
        </div>
      )}
      {/* ----------------------------------- */}
      <div className="container">
        {getCartLocale !== null && getCartLocale.length !== 0 ? (
          <div className="cart-container">
            <div className="cart-container__cartblock">
              <TransitionGroup className="cart-item-block">
                {getCartLocale.map((item, index) => (
                  <CSSTransition
                    key={index}
                    timeout={500}
                    classNames="cart-item"
                  >
                    <div
                      className="cart-container__cartitem"
                      style={{
                        marginTop: index === 0 ? 0 : 8,
                      }}
                      onClick={() => {
                        dispatch(setDetailData(item))
                        navigate('/detailpage')
                      }}
                    >
                      <img src={item?.selectedImg} alt="Cart img" />
                      <div
                        className="cart-container__counterblock"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{item.title}</span>
                        <span>????????????: {item.size}</span>
                        {/* --- */}
                        <div className="fdrow">
                          <span>????????: </span>
                          <div>
                            <div
                              style={{
                                backgroundColor: item.selectedColor,
                              }}
                            />
                          </div>
                        </div>
                        {/* --- */}
                        <div className="fdrow">
                          <span>{item.price}</span>
                          {item.discount && (
                            <span className="discount">{item.discount} p</span>
                          )}
                        </div>
                        {/* --- */}
                        <Counter item={item} />
                      </div>
                      <img
                        className="pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          dispatch(delCartData(item))
                        }}
                        src={require('../../assets/close-icon.png')}
                        alt="close icon"
                      />
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>

            <div className="cart-container__orderblock">
              <div className="cart-container__order-detailblock">
                <p>?????????? ????????????</p>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>???????????????????? ????????????: </span>
                  <span>
                    {getCartLocale?.reduce((i, k) => i + +k.counter, 0)} ????
                  </span>
                </div>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>???????????????????? ??????????????: </span>
                  <span>
                    {getCartLocale?.reduce(
                      (i, k) => i + Number(k.counter * k.count),
                      0
                    )}{' '}
                    ????
                  </span>
                </div>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>??????????????????: </span>
                  <span>{cost} ????????????</span>
                </div>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>????????????: </span>
                  <span>{cost - totalDiscount} ????????????</span>
                </div>
                {/* ---------- */}
              </div>
              {/* ------------------- */}
              <div className="fdrow cart-container__orderitem">
                <span>??????????????????: </span>
                <span>
                  {getCartLocale?.reduce(
                    (i, k) => i + Number(k.price * k.counter),
                    0
                  )}{' '}
                  ????????????
                </span>
              </div>
              <button onClick={() => setModal(true)}>???????????????? ??????????</button>
            </div>
          </div>
        ) : (
          <div className="emptycart-container">
            <h5>??????????????</h5>
            <p>?? ?????? ???????? ?????? ?????????????? ?? ??????????????</p>
            <h4>???????????????? ?????? ????????????????????????</h4>
            <div className="categories-container">
              <div className="hit-block hit-block__categories">
                {getCollectionsData[0]?.allData
                  .filter((i, k) => k < 5)
                  .map((item, key) => (
                    <div className="hit-block__item" key={item.id}>
                      <div className="hit-block__imgblock nth-five">
                        <CustomSlider
                          detailData={item}
                          sliderImage={item.imgNcolors}
                          nthFive
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
                          <span>????????????: {item.size}</span>
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
          </div>
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default Cart
