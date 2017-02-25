import React, { PropTypes } from 'react'
import classNames from 'classnames'
import OptionsTriggerClose from './OptionsTriggerClose'
import NumbersToggle from './NumbersToggle'
import ColorPaletteSelect from './ColorPaletteSelect'
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
      <OptionsTriggerClose />

      <h3 className='options_menu-heading'>Options</h3>
      <NumbersToggle />
      <ColorPaletteSelect
        colorKey={colorKey}
        handleSelectChange={handleSelectChange}
      />
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
