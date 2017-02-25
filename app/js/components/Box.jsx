import React, { PropTypes } from 'react'
import colors from '../constants/colors'

const Box = ({ name, represents, colorKey }) => {
  let colorIndex = 0

  if (represents.length === 1 && represents[0] === 'hours') {
    colorIndex = 1
  } else if (represents.length === 1 && represents[0] === 'minutes') {
    colorIndex = 2
  } else if (represents.length === 2) {
    colorIndex = 3
  }

  return (
    <div
      className={`box ${name}`}
      style={{
        backgroundColor: colors[colorKey][colorIndex],
        transition: 'background-color .5s ease'
      }}
    >
      {`Box ${name}`}
    </div>
  )
}

Box.propTypes = {
  name: PropTypes.string,
  represents: PropTypes.array,
  colorKey: PropTypes.string
}

export default Box
