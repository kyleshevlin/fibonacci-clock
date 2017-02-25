import React, { PropTypes } from 'react'
import colors from '../constants/colors'

const ColorPaletteSelect = ({
  colorKey,
  handleSelectChange
}) => (
  <div className='color_palette_select'>
    <label
      htmlFor='color_palette'
      className='color_palette_select-label'
    >
      Select a Color Palette
    </label>

    <select
      name='color_palette'
      className='color_palette_select-select'
      value={colorKey}
      onChange={handleSelectChange}
    >
      {Object.keys(colors).map((key, index) => (
        <option
          key={index}
          className='color_palette_select-select-option'
          value={key}
        >
          {key}
        </option>
      ))}
    </select>
  </div>
)

ColorPaletteSelect.propTypes = {
  colorKey: PropTypes.string,
  handleSelectChange: PropTypes.func
}

export default ColorPaletteSelect
