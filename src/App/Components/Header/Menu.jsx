import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ active, setActive }) => {
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
      </div>
    </div>
  )
}

export default Menu
