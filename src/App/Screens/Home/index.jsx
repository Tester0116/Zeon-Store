import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Keyboard, Mousewheel } from 'swiper'

import { ScrollToTop } from '../../Components/ScrollToTop'
import Hits from './Hits'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './_hits.scss'

const index = () => {
  const DATA = [
    {
      img: require('../../assets/swiper-example.png'),
      link: 'https://clck.ru/fqsjJ',
    },
    {
      img: require('../../assets/swiper-example.png'),
      link: 'https://clck.ru/fqsjJ',
    },
    {
      img: require('../../assets/swiper-example.png'),
      link: 'https://clck.ru/fqsjJ',
    },
    {
      img: require('../../assets/swiper-example.png'),
      link: 'https://clck.ru/fqsjJ',
    },
  ]

  return (
    <div className="container">
      {/* ------------ */}
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        // mousewheel={true}
        style={{ marginTop: '15px' }}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
      >
        {DATA.map((url, key) => (
          <SwiperSlide key={key}>
            <a href={url.link} target="_blank">
              <img src={url.img} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ------------ */}
      <ScrollToTop />
      {/* ------------ */}
      <Hits />
    </div>
  )
}

export default index
