export const COLLECTIONS_DATA = 'COLLECTIONS_DATA'
export const DETAILPAGE_DATA = 'DETAILPAGE_DATA'
export const UNSET_FAVOURITE = 'UNSET_FAVOURITE'
export const SET_FAVOURITE = 'SET_FAVOURITE'
export const HOME_BANNER = 'HOME_BANNER'
export const SET_ABOUT = 'SET_ABOUT'
export const NEWS_DATA = 'NEWS_DATA'
export const SPIN_LOAD = 'SPIN_LOAD'
export const HIT_DATA = 'HIT_DATA'

export const setCollectionsData = (payload) => ({
  type: COLLECTIONS_DATA,
  payload,
})
// ----------------------------
export const unSetFavourite = (payload) => ({ type: UNSET_FAVOURITE, payload })
// ----------------------------
export const setDetailData = (payload) => ({ type: DETAILPAGE_DATA, payload })
// ----------------------------
export const setFavourite = (payload) => ({ type: SET_FAVOURITE, payload })
// ----------------------------
export const setHomeBanner = (payload) => ({ type: HOME_BANNER, payload })
// ----------------------------
export const setNewsData = (payload) => ({ type: NEWS_DATA, payload })
// ----------------------------
export const setHitData = (payload) => ({ type: HIT_DATA, payload })
// ----------------------------
export const setAbout = (payload) => ({ type: SET_ABOUT, payload })
// ----------------------------
export const setLoad = (payload) => ({ type: SPIN_LOAD, payload })
// ----------------------------
