export const SET_FAVOURITE = 'SET_FAVOURITE'
export const UNSET_FAVOURITE = 'UNSET_FAVOURITE'
export const HIT_DATA = 'HIT_DATA'
export const HOME_BANNER = 'HOME_BANNER'
export const SPIN_LOAD = 'SPIN_LOAD'

export const setFavourite = (payload) => ({ type: SET_FAVOURITE, payload })
// ----------------------------
export const unSetFavourite = (payload) => ({ type: UNSET_FAVOURITE, payload })
// ----------------------------
export const setHitData = (payload) => ({ type: HIT_DATA, payload })
// ----------------------------
export const setHomeBanner = (payload) => ({ type: HOME_BANNER, payload })
// ----------------------------
export const setLoad = (payload) => ({ type: SPIN_LOAD, payload })
// ----------------------------
