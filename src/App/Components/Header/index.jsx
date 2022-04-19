import React from 'react'

import './_index.scss'

const Header = () => {
  return (
    <div className="parent-block">
      <div className="container">
        {/* -------------------------- */}
        <div className="header-first__block">
          <div>
            <a href="#">О нас</a>
            <a className="mh24" href="#">
              Коллекции
            </a>
            <a href="#">Новости</a>
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
      <div className="header-line"></div>
      {/* -------------------------- */}
      <div className="container">
        <div className="header-second__block">
          <img
            width={162}
            height={70}
            alt="logo"
            src={require('../../assets/zeon-icon.png')}
          />
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
            <div className="header-second__block-favourite header-second__block-favouritefirst">
              <img
                alt="favourite"
                src={require('../../assets/favourite.png')}
              />
              <a>Избранное</a>
            </div>
            <div className="header-second__block-favourite">
              <img alt="cart" src={require('../../assets/cart.png')} />
              <a>Корзина</a>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------- */}
    </div>
  )
}

export default Header
