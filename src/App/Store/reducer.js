import {
  COLLECTIONS_DATA,
  UNSET_FAVOURITE,
  DETAILPAGE_DATA,
  SET_FAVOURITE,
  BENEFIT_DATA,
  HOME_BANNER,
  FRESH_DATA,
  SET_ABOUT,
  SPIN_LOAD,
  NEWS_DATA,
  HIT_DATA,
} from './action'

const initialState = {
  getCollectionsData: [],
  getBenefitData: [],
  getHomeBanner: [],
  getDetailData: [],
  getFavourite: [],
  getFreshData: [],
  getNewsData: [],
  getHitData: [],
  getLoad: true,
  getAbout: [],
}

export default function appReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    // ------------------
    case UNSET_FAVOURITE:
      return {
        ...state,
        getFavourite: state.getFavourite.filter((fav) => fav.id !== payload.id),
      }
    // ------------------
    case SET_FAVOURITE:
      return { ...state, getFavourite: [...state.getFavourite, payload] }
    // ------------------
    case COLLECTIONS_DATA:
      return { ...state, getCollectionsData: payload }
    // ------------------
    case BENEFIT_DATA:
      return { ...state, getBenefitData: payload }
    // ------------------
    case DETAILPAGE_DATA:
      return { ...state, getDetailData: payload }
    // ------------------
    case HOME_BANNER:
      return { ...state, getHomeBanner: payload }
    // ------------------
    case FRESH_DATA:
      return { ...state, getFreshData: payload }
    // ------------------
    case NEWS_DATA:
      return { ...state, getNewsData: payload }
    // ------------------
    case HIT_DATA:
      return { ...state, getHitData: payload }
    // ------------------
    case SET_ABOUT:
      return { ...state, getAbout: payload }
    // ------------------
    case SPIN_LOAD:
      return { ...state, getLoad: payload }
    // ------------------
    default: {
      return state
    }
  }
}
