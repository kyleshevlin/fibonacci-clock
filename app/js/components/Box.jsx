import React, { PropTypes } from 'react'

const Box = ({ name, value }) => (
  <div className={`box ${name}`}>
    {`Box ${name}: ${value}`}
  </div>
)

Box.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}

export default Box
