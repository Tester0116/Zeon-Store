import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

import './_index.scss'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [SmsModalVisible, setSmsModalVisible] = useState(false)
  const [ModalVisible, setModalVisible] = useState(false)
  // ---------------------------------------------------
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [formSended, setformSended] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const classNames = (...classes) => classes.filter(Boolean).join(' ')

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      setSmsModalVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const nameChange = (e) => {
    setName(e.target.value)
  }

  const formSend = () => {
    if (name.length === 0) {
      return
    } else if (phone.length === 0) {
      return
    } else {
      if (formSended) {
        setModalVisible(false)
        setformSended(false)
        setName('')
        setPhone('')
      } else setformSended(true)
    }
  }

  return (
    <div
      style={{ position: 'fixed', right: '50px', bottom: '50px', zIndex: 99 }}
    >
      {ModalVisible && (
        <form onSubmit={(e) => e.preventDefault()} className="modal-block">
          <div className="modal-block__divblock">
            {formSended ? (
              <div className="modal-block__formsended-block">
                <img src={require('../../assets/thank-icon.png')} />
                <h5>Спасибо!</h5>
                <span>
                  Ваша заявка была принята ожидайте, скоро Вам перезвонят
                </span>
              </div>
            ) : (
              <>
                <h5>Если у Вас остались вопросы</h5>
                <span>Оставьте заявку и мы обязательно Вам перезвоним</span>
                <img
                  alt="close icon"
                  onClick={() => setModalVisible(false)}
                  className="modal-block__close-icon"
                  src={require('../../assets/close-icon.png')}
                />

                <div className="modal-block__inputblock">
                  <img
                    alt="poeple icon"
                    src={require('../../assets/man-icon.png')}
                  />
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как к Вам обращаться?"
                  />
                </div>

                <div className="modal-block__inputblock">
                  <img
                    alt="phone icon"
                    src={require('../../assets/phone-icon.png')}
                  />
                  <InputMask
                    required
                    mask="999 99 99 99"
                    placeholder="Номер телефона"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </>
            )}
            <button
              type="submit"
              style={{
                background:
                  (name.length && phone.length) === 0
                    ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), #1D1D1B'
                    : '#1D1D1B',
              }}
              className="modal-block__btn"
              onClick={formSend}
            >
              {formSend ? 'Продолжить покупки' : ' Заказать звонок'}
            </button>
          </div>
        </form>
      )}
      <div
        className={classNames(
          SmsModalVisible ? 'opacity-1' : 'opacity-0',
          'top-second-block'
        )}
      >
        <div className="fdrow">
          <a href="https://www.instagram.com/zeon.ithub/" target="_blank">
            <img
              alt="telegram icon"
              onClick={scrollToTop}
              src={require('../../assets/telegramTop-icon.png')}
            />
          </a>
          <a href="https://www.instagram.com/zeon.ithub/" target="_blank">
            <img
              alt="whatsapp icon"
              src={require('../../assets/whatsappTop-icon.png')}
            />
          </a>
          <a>
            <img
              alt="phone icon"
              onClick={() => setModalVisible(true)}
              src={require('../../assets/phoneTop-icon.png')}
            />
          </a>
        </div>
        <div className="fdcol">
          <img
            alt="arrow up icon"
            className="top-second-block__top-icon"
            onClick={scrollToTop}
            src={require('../../assets/scrollTop-icon.png')}
          />
          <img
            alt="arrow up icon"
            className="top-second-block__close-icon"
            onClick={() => setSmsModalVisible(false)}
            src={require('../../assets/close-icon.png')}
          />
        </div>
      </div>
      <div
        className={classNames(
          isVisible ? 'opacity-1' : 'opacity-0',
          'top-first-block'
        )}
      >
        <img
          alt="arrow up icon"
          style={{ cursor: 'pointer' }}
          onClick={scrollToTop}
          src={require('../../assets/scrollTop-icon.png')}
        />
        <img
          alt="sms icon"
          style={{ cursor: 'pointer' }}
          onClick={() => setSmsModalVisible(true)}
          src={require('../../assets/sms-icon.png')}
        />
      </div>
    </div>
  )
}
