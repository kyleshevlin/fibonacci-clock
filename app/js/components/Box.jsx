import React, { PropTypes } from 'react'
import colors from '../constants/colors'
import values from '../constants/values'

const Box = ({ name, value, colorKey }) => {
  const valueIndex = values.findIndex(item => item === value)

  return (
    <div
      className={`box ${name}`}
      style={{ backgroundColor: colors[colorKey][valueIndex] }}
    >
      {`Box ${name}: ${value}`}
    </div>
  )
}

Box.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  colorKey: PropTypes.string
}

export default Box
