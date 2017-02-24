import * as actions from '../../app/js/actions'
import reducer from '../../app/js/reducers'
import { formatTime } from '../../app/js/helpers'

const initialState = {
  currentTime: formatTime(12, 30, 45),
  boxes: [
    { name: 'box1a', size: 1, value: 'neither' },
    { name: 'box1b', size: 1, value: 'neither' }
  ]
}

describe('Reducers:', () => {
  it('returns state when action is unaccounted for', () => {
    const unaccountedFor = { type: 'UNACCOUNTED_FOR' }
    expect(reducer(initialState, unaccountedFor)).toEqual(initialState)
  })

  it('UPDATE_BOX updates box with same name with value', () => {
    const box = { name: 'box1a', size: 1, value: 'neither' }
    const value = 'both'
    const expectedState = Object.assign({}, initialState, {
      boxes: [
        { ...box, value },
        { name: 'box1b', size: 1, value: 'neither' }
      ]
    })

    expect(reducer(initialState, actions.updateBox(box, value))).toEqual(expectedState)
  })

  it('UPDATE_TIME updates currentTime with hours and minutes', () => {
    const hours = 14
    const minutes = 15
    const seconds = 20
    const expectedState = Object.assign({}, initialState, {
      currentTime: formatTime(hours, minutes, seconds)
    })

    expect(reducer(initialState, actions.updateTime(hours, minutes, seconds))).toEqual(expectedState)
  })
})
