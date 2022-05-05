import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ active, setActive, setModal }) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className={active ? 'blur' : 'dn'} />
      <div className="menu__content">
        <div className="menu__header">
          <h4>Меню</h4>
          <img
            onClick={() => setActive(false)}
            src={require('../../assets/close-icon.png')}
            alt="close-icon"
          />
        </div>
        <ul>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/about">Коллекция</Link>
          </li>
        </ul>
        <div className="fdrow">
          <img
            src={require('../../assets/favourite.png')}
            alt="favourite icon"
          />
          <span>Избранное</span>
        </div>
        <div className="fdrow" style={{ marginTop: 20 }}>
          <img src={require('../../assets/cart.png')} alt="favourite icon" />
          <span>Корзина</span>
        </div>
        <div className="menu__bottom">
          <b>Свяжитсь с нами:</b>
          <div className="fdrow">
            <span>Тел:</span>
            <a href="tel:+996 000 00 00 00">+996 000 00 00 00</a>
          </div>
          <div className="fdrow">
            <a
              href="https://www.instagram.com/zeon.ithub/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="telegram icon"
                src={require('../../assets/telegramTop-icon.png')}
              />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/zeon.ithub/"
              target="_blank"
            >
              <img
                alt="whatsapp icon"
                src={require('../../assets/whatsappTop-icon.png')}
              />
            </a>
            <a>
              <img
                alt="phone icon"
                onClick={() => {
                  setActive(false)
                  setModal(true)
                }}
                src={require('../../assets/phoneTop-icon.png')}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
