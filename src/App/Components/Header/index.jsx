import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import './_index.scss'

const Header = ({ breadCrums }) => {
  const { getFavourite, getCartData } = useSelector((store) => store.appReducer)
  const navigate = useNavigate()
  return (
    <header className="parent-block">
      <div className="container">
        {/* -------------------------- */}
        <div className="header-first__block">
          <div>
            <Link to="/about">
              <a>О нас</a>
            </Link>
            <Link to="/collections">
              <a className="mh24">Коллекции</a>
            </Link>
            <Link to="/news">
              <a>Новости</a>
            </Link>
          </div>
          <div>
            <span>Тел: </span>
            <a style={{ color: '#393939' }} href="tel:+996 000 00 00 00">
              +996 000 00 00 00
            </a>
          </div>
        </div>
      </div>
      {/* ---------- Line ---------- */}
      <div className="header-line" />
      {/* -------------------------- */}
      <div className="container">
        <div className="header-second__block">
          <Link to="/">
            <img
              width={162}
              height={70}
              alt="logo"
              src={require('../../assets/zeon-icon.png')}
            />
          </Link>
          <div className="header-second__block-inputdiv">
            <input className="header-second__block-input" placeholder="Поиск" />
            <a className="header-second__block-inputicon">
              <img
                width={24}
                height={24}
                alt="inputicon"
                src={require('../../assets/search-icon.png')}
              />
            </a>
          </div>
          <div className="fdrow posr">
            <div className="header-second__block-favourite header-second__block-dot">
              <div className="posr">
                {Boolean(getFavourite.length !== 0) && <span />}
                <img
                  alt="favourite"
                  src={require('../../assets/favourite.png')}
                />
              </div>
              <a>Избранное</a>
            </div>
            <Link to="/cart">
              <div className="header-second__block-favourite header-second__block-dot">
                <div className="posr">
                  {Boolean(getCartData.length !== 0) && <span />}
                  <img alt="cart" src={require('../../assets/cart.png')} />
                </div>
                <a>Корзина</a>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* -------------------------- */}

      {/* ---------- Line ---------- */}
      {breadCrums && (
        <>
          <div className="header-line" />
          {/* -------------------------- */}
          <div className="breadcrumb-block">
            <span onClick={() => navigate('/')}>Главная</span>

            {breadCrums.map((crum, key) => (
              <span
                onClick={() => crum.id !== 0 && navigate(-crum.id)}
                key={crum.id}
              >
                {crum.text}
              </span>
            ))}
          </div>
        </>
      )}
      {/* -------------------------- */}
    </header>
  )
}

export default Header
