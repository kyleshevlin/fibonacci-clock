import React, { PropTypes } from 'react'
import Box from './Box'

const Clock = ({ boxes, colorKey }) => (
  <div className='clock'>
    {boxes.map(box => (
      <Box
        key={box.name}
        {...box}
        colorKey={colorKey}
      />
    ))}
  </div>
)

Clock.propTypes = {
  boxes: PropTypes.array.isRequired,
  colorKey: PropTypes.string
}

export default Clock
