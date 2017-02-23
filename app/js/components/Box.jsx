import React, { PropTypes } from 'react'

const Box = ({ name }) => (
  <div className={`box ${name}`}>
    {`Box ${name}`}
  </div>
)

Box.propTypes = {
  name: PropTypes.string.isRequired
}

export default Box
