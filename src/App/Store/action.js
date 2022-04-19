export const FAVOURITE = 'FAVOURITE'

export function setFavourite(data) {
  return {
    type: FAVOURITE,
    payload: data,
  }
}
// ----------------------------
