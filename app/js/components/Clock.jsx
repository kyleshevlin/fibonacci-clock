import React, { PropTypes } from 'react'
import classNames from 'classnames'
import Box from './Box'

const Clock = ({ boxes, colorKey, areNumbersVisible }) => {
  const clockClasses = classNames(
    'clock',
    { 'numbers-are-visible': areNumbersVisible }
  )

  return (
    <div className={clockClasses}>
      {boxes.map(box => (
        <Box
          key={box.name}
          {...box}
          colorKey={colorKey}
        />
      ))}
    </div>
  )
}

Clock.propTypes = {
  boxes: PropTypes.array.isRequired,
  colorKey: PropTypes.string,
  areNumbersVisible: PropTypes.bool
}

export default Clock
