import React, { useState } from 'react'
import { Autoplay, Pagination, Keyboard, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'

import { ScrollToTop } from '../../Components/ScrollToTop'
import Hits from './Hits'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './_hits.scss'
import LoadingSpinner from '../../Components/Spinner'

const HomeIndex = () => {
  const { getHomeBanner } = useSelector((state) => state.appReducer)
  const [activeIndex, setactiveIndex] = useState(0)

  return (
    <div className="container">
      {/* ------------ */}
      {Boolean(getHomeBanner.length !== 0) && (
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSlideChange={(slide) => setactiveIndex(slide.activeIndex)}
          className="mySwiper"
          // mousewheel={true}
          style={{ marginTop: '15px' }}
          keyboard={true}
          modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        >
          {getHomeBanner.map((url, key) => (
            <SwiperSlide key={key}>
              <a href={url.hrefUrl} target="_blank">
                <img src={url.bannerUrl} alt="banner img" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="dots">
        {getHomeBanner.map((i, k) => (
          <span
            key={k}
            style={{
              backgroundColor: activeIndex === k ? '#1D1D1B' : 'transparent',
            }}
          ></span>
        ))}
      </div>
      {/* ------------ */}
      <ScrollToTop />
      {/* ------------ */}
      <Hits />
    </div>
  )
}

export default HomeIndex
