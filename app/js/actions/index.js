import * as types from '../constants/actionTypes'

export function updateTime (hours, minutes, seconds) {
  return {
    type: types.UPDATE_TIME,
    hours,
    minutes,
    seconds
  }
}

export function updateColorKey (key) {
  return {
    type: types.UPDATE_COLOR_KEY,
    key
  }
}
