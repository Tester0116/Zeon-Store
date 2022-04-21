import {
  HIT_DATA,
  HOME_BANNER,
  SET_FAVOURITE,
  SPIN_LOAD,
  UNSET_FAVOURITE,
} from './action'

const initialState = {
  getFavourite: [],
  getHitData: [],
  getHomeBanner: [],
  getLoad: true,
}

export default function appReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    // ------------------
    case SET_FAVOURITE:
      return { ...state, getFavourite: [...state.getFavourite, payload] }
    // ------------------
    case UNSET_FAVOURITE:
      return {
        ...state,
        getFavourite: state.getFavourite.filter((fav) => fav.id !== payload.id),
      }
    // ------------------
    case HIT_DATA:
      return { ...state, getHitData: payload }
    // ------------------
    case HOME_BANNER:
      return { ...state, getHomeBanner: payload }
    // ------------------
    case SPIN_LOAD:
      return { ...state, getLoad: payload }
    // ------------------
    default: {
      return state
    }
  }
}
