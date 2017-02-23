import * as types from '../constants/actionTypes'

export function updateBox (box, value) {
  return {
    type: types.UPDATE_BOX,
    box,
    value
  }
}

export function updateTime (hours, minutes, seconds) {
  return {
    type: types.UPDATE_TIME,
    hours,
    minutes,
    seconds
  }
}
