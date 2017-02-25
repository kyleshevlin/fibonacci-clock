import * as types from '../../app/js/constants/actionTypes'
import * as actions from '../../app/js/actions'

describe('Actions:', () => {
  it('updateTime should return a POJO with hours, minutes, and seconds', () => {
    const hours = 12
    const minutes = 30
    const seconds = 45
    const expectedAction = {
      type: types.UPDATE_TIME,
      hours,
      minutes,
      seconds
    }

    expect(actions.updateTime(hours, minutes, seconds)).toEqual(expectedAction)
  })

  it('updateColorKey should return POJO with key', () => {
    const key = 'foo'
    const expectedAction = {
      type: types.UPDATE_COLOR_KEY,
      key
    }

    expect(actions.updateColorKey(key)).toEqual(expectedAction)
  })

  it('openOptions should return POJO of correct type', () => {
    const expectedAction = { type: types.OPEN_OPTIONS }
    expect(actions.openOptions()).toEqual(expectedAction)
  })

  it('toggleNumbers should return POJO of correct type', () => {
    const expectedAction = { type: types.TOGGLE_NUMBERS }
    expect(actions.toggleNumbers()).toEqual(expectedAction)
  })
})
