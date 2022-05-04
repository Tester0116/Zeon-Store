import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setDetailData } from '../../Store/action'

const Dots = ({ activeIndex, onclick, sliderImage, nthFive, detailData }) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  return (
    <div className={nthFive ? 'all-dots nth-five' : 'all-dots'}>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
          onClick={() => {
            dispatch(setDetailData(detailData))
            navigate('/detailpage')
          }}
          onMouseOver={() => onclick(index)}
          onMouseOut={() => onclick(index)}
        ></span>
      ))}
    </div>
  )
}

export default Dots
