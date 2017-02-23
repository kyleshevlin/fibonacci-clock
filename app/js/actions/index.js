import * as types from '../constants/actionTypes'

export function updateBox (box, value) {
  return {
    type: types.UPDATE_BOX,
    box,
    value
  }
}
