import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ru from 'react-phone-number-input/locale/ru.json'
import { useDispatch, useSelector } from 'react-redux'
import PhoneInput from 'react-phone-number-input'
import { useNavigate, Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Counter from '../Counter'
import {
  delCartData,
  unSetFavourite,
  setFavourite,
  setDetailData,
} from '../../Store/action'

import 'react-phone-number-input/style.css'
import './_cart.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getCartData, getCollectionsData, getFavourite } = useSelector(
    (state) => state.appReducer
  )

  const [Modal, setModal] = useState(false)

  // Modal useState start

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

  // Modal useState end
  const checkFavourite = (item, key) => {
    const index = getFavourite?.map((i, k) => i.id)

    if (Boolean(getFavourite.length !== 0)) {
      if (Boolean(index.includes(item.id))) dispatch(unSetFavourite(item))
      else dispatch(setFavourite(item))
    } else dispatch(setFavourite(item))
  }
  const [itemId, setItemId] = useState(-1)

  const cost = getCartData?.reduce(
    (i, k) => i + Number(k.discount * k.counter),
    0
  )
  const totalDiscount = getCartData?.reduce(
    (i, k) => i + Number(k.price * k.counter),
    0
  )
  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Корзина' }]} />
      {Modal && (
        <div className="modal-container">
          {sended ? (
            <div className="modal-container__formsended-block">
              <img
                src={require('../../assets/thank-icon.png')}
                alt="thank icon"
              />
              <h5>Спасибо!</h5>
              <span>
                {`Ваша заявка была принята ожидайте, 
                скоро Вам перезвонят`}
              </span>
              <button
                style={{ marginTop: 0 }}
                className="modal-container__sendbtn"
                onClick={() => navigate('/')}
              >
                Продолжить покупки
              </button>
            </div>
          ) : (
            <div className="modal-container__block">
              <div className="fdrow">
                <h5>Оформление заказа</h5>
                <img
                  onClick={() => setModal(false)}
                  src={require('../../assets/close-icon.png')}
                  alt="close icon"
                />
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                {/* ----- name ----- */}
                <div className="fdcol">
                  <label htmlFor="name">Ваше имя</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Например Иван"
                  />
                </div>
                {/* ----- Second Name ----- */}
                <div className="fdcol">
                  <label htmlFor="secondName">Ваше фамилия</label>
                  <input
                    id="secondName"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                    required
                    placeholder="Например Иванов"
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
                    Электронная почта
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
                      borderColor: phoneDirty ? '#E5271B' : '#808080',
                      color: phoneDirty ? '#E5271B' : '#808080',
                    }}
                  >
                    Ваш номер телефона
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
                  <label htmlFor="country">Страна</label>
                  <input
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    placeholder="Введите страну"
                  />
                </div>
                {/* ----- City ----- */}
                <div className="fdcol">
                  <label htmlFor="city">Город</label>
                  <input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    placeholder="Введите город"
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
                  <label htmlFor="checkbox-id">Согласен с условиями </label>
                  <span onClick={() => navigate('/offer')}>
                    публичной оферты
                  </span>
                </div>
                {/* ---------- button ---------- */}
                <button
                  className="modal-container__sendbtn"
                  disabled={
                    (name &&
                      secondName &&
                      email &&
                      city &&
                      country &&
                      phone) === ' '
                      ? true
                      : emailDirty
                      ? true
                      : checked
                      ? false
                      : true
                  }
                  onClick={() => setSended(true)}
                >
                  Заказать
                </button>
              </form>
            </div>
          )}
        </div>
      )}
      {/* ----------------------------------- */}
      <div className="container">
        {Boolean(getCartData.length !== 0) ? (
          <div className="cart-container">
            <div className="cart-container__cartblock">
              <TransitionGroup className="cart-item-block">
                {getCartData.map((item, index) => (
                  <CSSTransition
                    key={index}
                    timeout={500}
                    classNames="cart-item"
                  >
                    <div
                      className="cart-container__cartitem"
                      style={{ marginTop: index === 0 ? 0 : 8 }}
                    >
                      <img
                        src={item?.imgNcolors[item?.selectedColor]?.imgUrl}
                        alt="Cart img"
                      />
                      <div className="cart-container__counterblock">
                        <span>{item.title}</span>
                        <span>Размер: {item.size}</span>
                        {/* --- */}
                        <div className="fdrow">
                          <span>Цвет: </span>
                          <div>
                            <div
                              style={{
                                backgroundColor:
                                  item.imgNcolors[item.selectedColor].color,
                              }}
                            />
                          </div>
                        </div>
                        {/* --- */}
                        <div className="fdrow">
                          <span>{item.price}</span>
                          {item.discount && <span>{item.discount} p</span>}
                        </div>
                        {/* --- */}
                        <Counter index={item.id} count={item?.counter} />
                      </div>
                      <img
                        className="pointer"
                        onClick={() => dispatch(delCartData(item))}
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
                <p>Сумма заказа</p>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>Количество линеек: </span>
                  <span>
                    {getCartData?.reduce((i, k) => i + +k.counter, 0)} шт
                  </span>
                </div>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>Количество товаров: </span>
                  <span>
                    {getCartData?.reduce(
                      (i, k) => i + Number(k.counter * k.count),
                      0
                    )}{' '}
                    шт
                  </span>
                </div>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>Стоимость: </span>
                  <span>{cost} рублей</span>
                </div>
                {/* ---------- */}
                <div className="fdrow cart-container__orderitem">
                  <span>Скидка: </span>
                  <span>{cost - totalDiscount} рублей</span>
                </div>
                {/* ---------- */}
              </div>
              {/* ------------------- */}
              <div className="fdrow cart-container__orderitem">
                <span>Стоимость: </span>
                <span>
                  {getCartData?.reduce(
                    (i, k) => i + Number(k.price * k.counter),
                    0
                  )}{' '}
                  рублей
                </span>
              </div>
              <button onClick={() => setModal(true)}>Оформить заказ</button>
            </div>
          </div>
        ) : (
          <div className="emptycart-container">
            <h5>Корзина</h5>
            <p>У Вас пока нет товаров в корзине</p>
            <h4>Возможно Вас заинтересует</h4>
            <div className="hit-block hit-block__categories">
              {getCollectionsData[0]?.allData
                .filter((i, k) => k < 5)
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
          </div>
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </section>
  )
}

export default Cart
