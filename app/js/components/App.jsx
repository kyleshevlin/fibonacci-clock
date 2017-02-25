import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header'
import ClockContainer from '../containers/ClockContainer'
import Instructions from './Instructions'
import UpdateTimeContainer from '../containers/UpdateTimeContainer'
import OptionsMenuContainer from '../containers/OptionsMenuContainer'

const App = () => (
  <Provider store={store}>
    <div className='main'>
      <div className='container'>
        <Header />
        <ClockContainer />
        <Instructions />
      </div>

      <OptionsMenuContainer />
      <UpdateTimeContainer />
    </div>
  </Provider>
)

export default App
