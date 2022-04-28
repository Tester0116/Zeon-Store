import React, { useEffect, useState } from 'react'

const CustomSlider = () => {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0)
  const img = [
    <img key={0} src={require('../../assets/filled-heart.png')} />,
    <img key={1} src={require('../../assets/filled-heart.png')} />,
    <img key={2} src={require('../../assets/filled-heart.png')} />,
    <img key={3} src={require('../../assets/filled-heart.png')} />,
    <img key={4} src={require('../../assets/filled-heart.png')} />,
  ]
  useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === img.length - 1 ? 0 : current + 1
        // Возвращаем индекс
        return res
      })
    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
  }, [])

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  )
}

export default CustomSlider
