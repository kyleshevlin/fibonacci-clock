import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ClockContainer from '../containers/ClockContainer'

const App = () => (
  <Provider store={store}>
    <div className='main'>
      <h1>Fibonacci Clock</h1>

      <ClockContainer />
    </div>
  </Provider>
)

export default App
