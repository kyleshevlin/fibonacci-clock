import * as types from '../constants/actionTypes'

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
      value: 'both'
    },
    {
      name: 'box2',
      size: 2,
      value: 'hours'
    },
    {
      name: 'box3',
      size: 3,
      value: 'neither'
    },
    {
      name: 'box5',
      size: 5,
      value: 'minutes'
    }
  ],
  colorKey: 'default'
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

    default:
      return state
  }
}

export default reducer
