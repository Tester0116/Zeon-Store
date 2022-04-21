import React from 'react'
import './_index.scss'

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <div className="outer"></div>
      <div className="middle"></div>
      <div className="inner"></div>
    </div>
  )
}
export default LoadingSpinner
