import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartCounter, incrementCartCounter } from '../../Store/action'

import './_index.scss'

const Counter = ({ index, count }) => {
  // const [counter, setCount] = useState(1)
  const dispatch = useDispatch()
  const { getCartData } = useSelector((state) => state.appReducer)

  const decrement = () => count !== 0 && dispatch(decrementCartCounter(index))

  const increment = () => dispatch(incrementCartCounter(index))

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
