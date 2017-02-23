import React from 'react'
import Box from './Box'

const App = () => (
  <div className='main'>
    <h1>Fibonacci Clock</h1>

    <div className='clock'>
      <Box name='one-a' />
      <Box name='one-b' />
      <Box name='two' />
      <Box name='three' />
      <Box name='five' />
    </div>
  </div>
)

export default App
