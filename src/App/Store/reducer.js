import { FAVOURITE } from './action'

const initialState = {
  getFavourite: [],
}

export default function appReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    // ------------------
    case FAVOURITE: {
      return {
        ...state,
        getFavourite: payload,
      }
    }
    // ------------------
    default: {
      return state
    }
  }
}
