import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setDetailData } from '../../Store/action'

const SliderContent = ({ activeIndex, sliderImage, detailData }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}
          onClick={() => {
            dispatch(setDetailData(detailData))
            navigate('/detailpage')
          }}
        >
          <img className="slide-image" src={slide.imgUrl} alt={index} />
        </div>
      ))}
    </section>
  )
}
export default SliderContent
