import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import colors from '../constants/colors'
import { updateColorKey } from '../actions'

class OptionsMenu extends Component {
  constructor () {
    super()

    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange (e) {
    this.props.updateColorKey(e.target.value)
  }

  render () {
    return (
      <div className='options_menu'>
        <h2>Options Menu</h2>

        <h3>Color Palette</h3>
        <select value={this.props.colorKey} onChange={this.handleSelectChange}>
          {Object.keys(colors).map((key, index) => (
            <option key={index} value={key}>{key}</option>
          ))}
        </select>
      </div>
    )
  }
}

OptionsMenu.propTypes = {
  colorKey: PropTypes.string,
  updateColorKey: PropTypes.func
}

const mapStateToProps = state => ({
  colorKey: state.colorKey
})

const mapDispatchToProps = {
  updateColorKey
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsMenu)
