import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ClockContainer from '../containers/ClockContainer'
import UpdateTimeContainer from '../containers/UpdateTimeContainer'
import OptionsMenuContainer from '../containers/OptionsMenuContainer'
import OptionsTriggerOpen from './OptionsTriggerOpen'

const App = () => (
  <Provider store={store}>
    <div className='main'>
      <div className='container'>
        <h1>Fibonacci Clock</h1>
        <OptionsTriggerOpen />
        <ClockContainer />
      </div>

      <OptionsMenuContainer />
      <UpdateTimeContainer />
    </div>
  </Provider>
)

export default App
