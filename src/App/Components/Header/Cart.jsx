import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Counter from '../Counter'

import { delCartData, setAbout } from '../../Store/action'

import './_cart.scss'

const Cart = () => {
  const dispatch = useDispatch()

  const { getCartData } = useSelector((state) => state.appReducer)

  const [count, setCount] = useState(1)

  const [totalCount, setTotalCount] = useState(1)

  const change = (number) => {
    console.log(
      // getCartData?.reduce((i, k) => i + Number(k.discount * k.counter), 0)
      getCartData
    )
  }

  // const localPrice = getCartData.reduce(
  //   (i, k) => Number(i.discount) + Number(k.discount)
  // )
  // const localDiscount = getCartData.reduce(
  //   (i, k) => Number(i.discount) + Number(k.discount)
  // )
  // console.log(
  //   getCartData?.reduce((i, k) => i + Number(k.discount * k.counter), 0)
  // )
  return (
    <section>
      <Header breadCrums={[{ id: 0, text: 'Корзина' }]} />

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
                        <Counter index={item.id} />
                      </div>
                      <img
                        className="pointer"
                        onClick={change}
                        // onClick={() => dispatch(delCartData(item))}
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
                <div className="fdrow">
                  <span>Количество линеек: </span>
                  <span>{totalCount + 1}</span>
                </div>
                {/* ---------- */}
                <div className="fdrow">
                  <span>Количество товаров: </span>
                  <span>{(totalCount + 1) * 5}</span>
                </div>
                {/* ---------- */}
                <div className="fdrow">
                  <span>Стоимость: </span>
                  <span>
                    {/* {getCartData?.reduce(
                      (i, k) => i + Number(k.discount * count),
                      0
                    )} */}
                    рублей
                  </span>
                </div>
                {/* ---------- */}
                <div className="fdrow">
                  <span>Скидка: </span>
                  <span>
                    {/* {getCartData.reduce(
                      (i, k) => Number(i.discount) + Number(k.discount)
                    )} */}
                    рублей
                  </span>
                </div>
                {/* ---------- */}
              </div>
            </div>
          </div>
        ) : (
          <h1>Корзина пуст!</h1>
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

export default Cart
