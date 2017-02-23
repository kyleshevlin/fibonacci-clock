import * as types from '../../app/js/constants/actionTypes'
import * as actions from '../../app/js/actions'

describe('Actions:', () => {
  it('updateBox should return a POJO with a box object and value', () => {
    const box = {
      name: 'box',
      value: 'foo'
    }
    const value = 'bar'
    const expectedAction = {
      type: types.UPDATE_BOX,
      box,
      value
    }

    expect(actions.updateBox(box, value)).toEqual(expectedAction)
  })

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
})
