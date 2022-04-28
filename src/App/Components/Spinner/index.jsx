import React from 'react'
import './_index.scss'

const LoadingSpinner = () => {
  return (
    <div style={{ height: 500 }}>
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
      </div>
    </div>
  )
}
export default LoadingSpinner
