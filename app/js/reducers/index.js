import * as types from '../constants/actionTypes'

const initialState = {
  boxes: [
    { name: 'box1a', value: null },
    { name: 'box1b', value: null },
    { name: 'box2', value: null },
    { name: 'box3', value: null },
    { name: 'box5', value: null }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_BOX: {
      const index = state.boxes.findIndex(box => {
        return box.name === action.box.name
      })

      return Object.assign({}, state, {
        boxes: [
          ...state.boxes.slice(0, index),
          {
            name: action.box.name,
            value: action.value
          },
          ...state.boxes.slice(index + 1)
        ]
      })
    }

    default:
      return state
  }
}

export default reducer
