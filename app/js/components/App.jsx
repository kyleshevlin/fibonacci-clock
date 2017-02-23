import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ClockContainer from '../containers/ClockContainer'
import UpdateTimeContainer from '../containers/UpdateTimeContainer'

const App = () => (
  <Provider store={store}>
    <div className='main'>
      <h1>Fibonacci Clock</h1>

      <ClockContainer />
      <UpdateTimeContainer />
    </div>
  </Provider>
)

export default App
