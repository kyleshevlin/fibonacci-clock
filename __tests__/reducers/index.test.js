import * as actions from '../../app/js/actions'
import reducer from '../../app/js/reducers'

const initialState = {
  boxes: [
    { name: 'box', value: 1 }
  ]
}

describe('Reducers:', () => {
  it('returns state when action is unaccounted for', () => {
    const unaccountedFor = { type: 'UNACCOUNTED_FOR' }
    expect(reducer(initialState, unaccountedFor)).toEqual(initialState)
  })

  it('UPDATE_BOX updates box with same name with value', () => {
    const box = { name: 'box' }
    const value = 'foo'
    const expectedState = Object.assign({}, initialState, {
      boxes: [
        { name: 'box', value: 'foo' }
      ]
    })

    expect(reducer(initialState, actions.updateBox(box, value))).toEqual(expectedState)
  })
})
