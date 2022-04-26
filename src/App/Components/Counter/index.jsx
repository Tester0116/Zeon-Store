import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCartCounter } from '../../Store/action'

import './_index.scss'

const Counter = ({ index }) => {
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()
  const { getCartData, getDetailData } = useSelector(
    (state) => state.appReducer
  )

  const decrement = () => {
    // dispatch(setCartCounter(index))
  }
  const increment = () => {
    setCount(count + 1)
    dispatch(incrementCartCounter(index))
  }
  return (
    <div className="counter-container">
      <button onClick={decrement} disabled={count === 1}>
        <img
          src={require(`../../assets/${
            count !== 1 ? 'minuse-inactive-icon' : 'minuse-icon'
          }.png`)}
          alt="minuse-icon"
        />
      </button>
      <div className="counter-container__spanblock">
        <span>{count}</span>
      </div>
      <button onClick={increment}>
        <img src={require('../../assets/plus-icon.png')} alt="plus-icon" />
      </button>
    </div>
  )
}

export default Counter
