import * as types from '../constants/actionTypes'
import boxes from '../constants/boxes'
import { formatTime, updateBoxes } from '../helpers'

const initialTime = new Date()
const initialHours = initialTime.getHours()
const initialMinutes = initialTime.getMinutes()
const initialSeconds = initialTime.getSeconds()

const initialState = {
  boxes,
  colorKey: 'default',
  currentTime: formatTime(initialHours, initialMinutes, initialSeconds),
  isOptionsOpen: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TIME: {
      const newCurrentTime = formatTime(action.hours, action.minutes, action.seconds)

      return Object.assign({}, state, {
        currentTime: newCurrentTime,
        boxes: updateBoxes(state.boxes, newCurrentTime.hours, newCurrentTime.minutes)
      })
    }

    case types.UPDATE_COLOR_KEY:
      return Object.assign({}, state, { colorKey: action.key })

    case types.OPEN_OPTIONS:
      return Object.assign({}, state, { isOptionsOpen: true })

    case types.CLOSE_OPTIONS:
      return Object.assign({}, state, { isOptionsOpen: false })

    default:
      return state
  }
}

export default reducer
