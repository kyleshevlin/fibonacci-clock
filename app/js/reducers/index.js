import * as types from '../constants/actionTypes'
import { formatTime } from '../helpers'

const initialTime = new Date()
const initialHours = initialTime.getHours()
const initialMinutes = initialTime.getMinutes()
const initialSeconds = initialTime.getSeconds()

const initialState = {
  boxes: [
    {
      name: 'box1a',
      size: 1,
      value: 'neither'
    },
    {
      name: 'box1b',
      size: 1,
      value: 'neither'
    },
    {
      name: 'box2',
      size: 2,
      value: 'neither'
    },
    {
      name: 'box3',
      size: 3,
      value: 'neither'
    },
    {
      name: 'box5',
      size: 5,
      value: 'neither'
    }
  ],
  colorKey: 'default',
  currentTime: formatTime(initialHours, initialMinutes, initialSeconds)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_BOX: {
      const index = state.boxes.findIndex(box => box.name === action.box.name)

      return Object.assign({}, state, {
        boxes: [
          ...state.boxes.slice(0, index),
          {
            ...action.box,
            value: action.value
          },
          ...state.boxes.slice(index + 1)
        ]
      })
    }

    case types.UPDATE_TIME: {
      return Object.assign({}, state, {
        currentTime: formatTime(action.hours, action.minutes, action.seconds)
      })
    }

    default:
      return state
  }
}

export default reducer
