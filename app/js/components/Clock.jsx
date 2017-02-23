import React, { PropTypes } from 'react'
import Box from './Box'

const Clock = ({ boxes }) => (
  <div className='clock'>
    {boxes.map(box => (
      <Box key={box.name} {...box} />
    ))}
  </div>
)

Clock.propTypes = {
  boxes: PropTypes.array.isRequired
}

export default Clock
