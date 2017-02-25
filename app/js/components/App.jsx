import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ClockContainer from '../containers/ClockContainer'
import UpdateTimeContainer from '../containers/UpdateTimeContainer'
import OptionsMenu from './OptionsMenu'

const App = () => (
  <Provider store={store}>
    <div className='main'>
      <div className='container'>
        <h1>Fibonacci Clock</h1>
        <ClockContainer />
      </div>

      <OptionsMenu />
      <UpdateTimeContainer />
    </div>
  </Provider>
)

export default App
