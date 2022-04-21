import React from 'react'
import { Link } from 'react-router-dom'

import './_index.scss'

const Footer = () => {
  return (
    <footer className="footer-block">
      <div className="container">
        {/* -------------------------- */}
        <div className="footer-block__colums">
          <div className="footer-block__colums-logo">
            <img
              width={243}
              height={107}
              src={require('../../assets/zeon-footer-icon.png')}
              alt="logo"
            />
            <span>Developed by Zeon 2022</span>
          </div>
          {/* ---------- */}
          <div className="footer-block__colums-linksblock">
            <div className="footer-block__colums-links">
              <span className="footer-block__colums-linkstitle">Компания</span>
              <ul>
                <li>
                  <Link to="about">
                    <a>
                      <span>О нас</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="news">
                    <a>
                      <span>Новости</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="support">
                    <a>
                      <span>Помощь</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* ---------- Start Contacts ---------- */}
            <div className="footer-block__colums-links">
              <span className="footer-block__colums-linkstitle">Контакты</span>
              <ul>
                <li>
                  <a href="tel:+996 500 123 456">
                    <img
                      src={require('../../assets/call-icon.png')}
                      alt="contacts"
                    />
                    <span>+996 500 123 456</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+996 500 123 456">
                    <img
                      src={require('../../assets/call-icon.png')}
                      alt="contacts"
                    />
                    <span>+996 500 123 456</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:mail@gmail.com">
                    <img
                      src={require('../../assets/mail-icon.png')}
                      alt="contacts"
                    />
                    <span>mail@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* ---------- End Contacts ---------- */}

            {/* ---------- Start Social ---------- */}
            <div className="footer-block__colums-links">
              <span className="footer-block__colums-linkstitle">
                Мы в социальных сетях:
              </span>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/zeon.ithub/"
                    target="_blank"
                  >
                    <img
                      src={require('../../assets/instagram-icon.png')}
                      alt="instagram"
                    />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zeon.ithub/"
                    target="_blank"
                  >
                    <img
                      src={require('../../assets/telegram-icon.png')}
                      alt="telegram"
                    />
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zeon.ithub/"
                    target="_blank"
                  >
                    <img
                      src={require('../../assets/whatsapp-icon.png')}
                      alt="whatsapp"
                    />
                    <span>Whatsapp</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* ---------- End Social ---------- */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
