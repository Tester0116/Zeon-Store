import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCartCounter, incrementCartCounter } from '../../Store/action'

import './_index.scss'

const Counter = ({ item }) => {
  const dispatch = useDispatch()

  const decrement = () =>
    item.counter !== 0 && dispatch(decrementCartCounter(item))

  const increment = () => dispatch(incrementCartCounter(item))

  return (
    <div className="counter-container">
      <button onClick={decrement} disabled={item.counter === 1}>
        <img
          src={require(`../../assets/${
            item.counter !== 1 ? 'minuse-inactive-icon' : 'minuse-icon'
          }.png`)}
          alt="minuse-icon"
        />
      </button>
      <div className="counter-container__spanblock">
        <span>{item.counter}</span>
      </div>
      <button onClick={increment}>
        <img src={require('../../assets/plus-icon.png')} alt="plus-icon" />
      </button>
    </div>
  )
}

export default Counter
