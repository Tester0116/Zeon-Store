import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  COLLECTIONS_DATA,
  CATEGORIES_DATA,
  UNSET_FAVOURITE,
  DETAILPAGE_DATA,
  SET_FAVOURITE,
  DELCART_DATA,
  BENEFIT_DATA,
  HOME_BANNER,
  FRESH_DATA,
  CART_DATA,
  SET_ABOUT,
  SPIN_LOAD,
  NEWS_DATA,
  HIT_DATA,
} from './action'

const initialState = {
  getCollectionsData: [],
  getCategoriesData: [],
  getBenefitData: [],
  getHomeBanner: [],
  getDetailData: [],
  getFavourite: [],
  getFreshData: [],
  getCartData: [],
  getNewsData: [],
  getHitData: [],
  getLoad: true,
  getAbout: [],
}

export default function appReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    // ------------------
    case INCREMENT_COUNTER: {
      const item = state.getCartData.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            counter: item.counter + 1,
          }
        }
        return item
      })

      return {
        ...state,
        getCartData: item,
      }
    }
    // ------------------
    case DECREMENT_COUNTER: {
      const item = state.getCartData.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            counter: item.counter - 1,
          }
        }
        return item
      })

      return {
        ...state,
        getCartData: item,
      }
    }
    // ------------------
    case UNSET_FAVOURITE:
      return {
        ...state,
        getFavourite: state.getFavourite.filter((fav) => fav.id !== payload.id),
      }
    // ------------------
    case DELCART_DATA:
      return {
        ...state,
        getCartData: state.getCartData.filter((fav) => fav.id !== payload.id),
      }
    // ------------------
    case SET_FAVOURITE:
      return { ...state, getFavourite: [...state.getFavourite, payload] }
    // ------------------
    case CART_DATA:
      return { ...state, getCartData: [...state.getCartData, payload] }
    // ------------------
    case COLLECTIONS_DATA:
      return { ...state, getCollectionsData: payload }
    // ------------------
    case CATEGORIES_DATA:
      return { ...state, getCategoriesData: payload }
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
