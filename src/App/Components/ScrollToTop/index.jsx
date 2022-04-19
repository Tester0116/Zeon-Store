import React, { useEffect, useState } from 'react'

import './_index.scss'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [ModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div style={{ position: 'fixed', right: '100px', top: '10%', zIndex: 99 }}>
      {ModalVisible && (
        <div className="modal-block">
          <div className="modal-block__divblock">
            <h5>Если у Вас остались вопросы</h5>
            <span>Оставьте заявку и мы обязательно Вам перезвоним</span>
            <img
              onClick={() => setModalVisible(false)}
              className="modal-block__close-icon"
              src={require('../../assets/close-icon.png')}
            />

            <div className="modal-block__inputblock">
              <img src={require('../../assets/man-icon.png')} />
              <input placeholder="Как к Вам обращаться?" />
            </div>

            <div className="modal-block__inputblock">
              <img src={require('../../assets/phone-icon.png')} />
              <input placeholder="Как к Вам обращаться?" />
            </div>

            <button className="modal-block__btn" onClick={() => {}}>
              Заказать звонок
            </button>
          </div>
        </div>
      )}
      <div className={classNames(isVisible ? 'opacity1' : 'opacity-0')}>
        <img
          style={{ cursor: 'pointer' }}
          onClick={scrollToTop}
          src={require('../../assets/scrollTop-icon.png')}
        />
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => setModalVisible(true)}
          src={require('../../assets/sms-icon.png')}
        />
      </div>
    </div>
  )
}
