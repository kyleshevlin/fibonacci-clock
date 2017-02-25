import * as actions from '../../app/js/actions'
import reducer from '../../app/js/reducers'
import { formatTime } from '../../app/js/helpers'

const initialState = {
  currentTime: formatTime(12, 30, 45),
  boxes: [
    { name: 'box1a', size: 1, represents: [] },
    { name: 'box1b', size: 1, represents: [] }
  ]
}

describe('Reducers:', () => {
  it('returns state when action is unaccounted for', () => {
    const unaccountedFor = { type: 'UNACCOUNTED_FOR' }
    expect(reducer(initialState, unaccountedFor)).toEqual(initialState)
  })

  describe('UPDATE_TIME', () => {
    it('updates currentTime with hours and minutes', () => {
      const hours = 14
      const minutes = 15
      const seconds = 20
      const expectedState = Object.assign({}, initialState, {
        currentTime: formatTime(hours, minutes, seconds)
      })

      expect(
        reducer(initialState, actions.updateTime(hours, minutes, seconds)).currentTime
      ).toEqual(expectedState.currentTime)
    })
  })
})
