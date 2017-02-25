import React, { PropTypes } from 'react'
import classNames from 'classnames'
import colors from '../constants/colors'
import OptionsTriggerClose from './OptionsTriggerClose'
import Legend from './Legend'

const OptionsMenu = ({
  colorKey,
  isOptionsOpen,
  handleSelectChange
}) => {
  const menuClasses = classNames(
    'options_menu',
    { 'is-open': isOptionsOpen }
  )

  return (
    <div className={menuClasses}>
      <h2>Options Menu</h2>
      <OptionsTriggerClose />

      <h3>Color Palette</h3>
      <select value={colorKey} onChange={handleSelectChange}>
        {Object.keys(colors).map((key, index) => (
          <option key={index} value={key}>{key}</option>
        ))}
      </select>

      <Legend colorKey={colorKey} />
    </div>
  )
}

OptionsMenu.propTypes = {
  colorKey: PropTypes.string,
  isOptionsOpen: PropTypes.bool,
  handleSelectChange: PropTypes.func,
  updateColorKey: PropTypes.func
}

export default OptionsMenu
