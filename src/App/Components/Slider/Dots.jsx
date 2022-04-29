import React from 'react'

const Dots = ({ activeIndex, onclick, sliderImage }) => {
  return (
    <div className="all-dots">
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
