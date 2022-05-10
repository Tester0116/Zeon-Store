import React, { useState } from 'react'
import { Autoplay, Pagination, Keyboard, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'

import ScrollToTop from '../../Components/ScrollToTop'
import Collections from './Collections'
import Fresh from './Fresh'
import Hits from './Hits'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './_hits.scss'

const HomeIndex = ({ active, setActive }) => {
  const { getHomeBanner, getBenefitData } = useSelector(
    (state) => state.appReducer
  )
  const [activeIndex, setactiveIndex] = useState(0)

  return (
    <>
      {Boolean(getHomeBanner.length !== 0) && (
        <div className="swiper-block">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            onSlideChange={(slide) => setactiveIndex(slide.activeIndex)}
            className="mySwiper"
            style={{ marginTop: '-50px' }}
            keyboard={true}
            modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
          >
            {getHomeBanner.map((url, key) => (
              <SwiperSlide key={key}>
                <a href={url.hrefUrl} target="_blank" rel="noreferrer">
                  <img src={url.bannerUrl} alt="banner img" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="dots">
            {getHomeBanner.map((i, k) => (
              <span
                key={k}
                style={{
                  backgroundColor:
                    activeIndex === k ? '#1D1D1B' : 'transparent',
                }}
              ></span>
            ))}
          </div>
        </div>
      )}

      <div className="container">
        {/* ------------ */}
        <ScrollToTop ModalVisible={active} setModalVisible={setActive} />
        {/* ------------ */}
        <Hits />
        {/* ------------ */}
        <Fresh />
        {/* ------------ */}
        <Collections />
        {/* ------ BENEFITS ------ */}
        {getBenefitData.length !== 0 && (
          <>
            <h5 className="benefit-block__h5">Наши преимущества</h5>
            <div className="benefit-block">
              {getBenefitData
                .sort((a, b) => a.id - b.id)
                .map((benefit, index) => (
                  <div key={benefit.id} className="benefit-block__item">
                    <img
                      src={require(`../../assets/${benefit.type}-icon.png`)}
                      alt="cash icon"
                    />
                    <span>{benefit.title}</span>
                    <p>{benefit.text}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default HomeIndex
