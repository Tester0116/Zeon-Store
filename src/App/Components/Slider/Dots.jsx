import React from 'react'

const Dots = ({ activeIndex, onclick, sliderImage, nthFive }) => {
  return (
    <div className={nthFive ? 'all-dots nth-five' : 'all-dots'}>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
          onClick={() => onclick(index)}
          onMouseOver={() => onclick(index)}
          onMouseOut={() => onclick(index)}
        ></span>
      ))}
    </div>
  )
}

export default Dots
