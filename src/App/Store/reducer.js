import { SET_FAVOURITE, UNSET_FAVOURITE } from './action'

const initialState = {
  getFavourite: [],
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
    default: {
      return state
    }
  }
}
