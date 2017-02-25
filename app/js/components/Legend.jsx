import React, { PropTypes } from 'react'
import colors from '../constants/colors'

const colorLabels = ['Neither', 'Hours', 'Minutes', 'Both']

const Legend = ({ colorKey }) => (
  <div className='legend'>
    <h4 className='legend-heading'>Legend</h4>

    {colors[colorKey].map((color, index) => (
      <div key={index} className='legend-item'>
        <div className='legend-item-box' style={{ backgroundColor: colors[colorKey][index] }} />
        <div className='legend-item-label'>
          {colorLabels[index]}
        </div>
      </div>
    ))}
  </div>
)

Legend.propTypes = {
  colorKey: PropTypes.string
}

export default Legend
