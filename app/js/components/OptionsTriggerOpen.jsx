import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { openOptions } from '../actions'

class OptionsTriggerOpen extends Component {
  render () {
    return (
      <button
        className='options_trigger--open'
        onClick={this.props.openOptions}
      >
        Options
        <svg
          className='options_trigger--open-arrow'
          viewBox='0 0 20 20'
        >
          <path d='M0 0 L20 10 L0 20' fill='none' />
        </svg>
      </button>
    )
  }
}

OptionsTriggerOpen.propTypes = {
  openOptions: PropTypes.func
}

const mapDispatchToProps = {
  openOptions
}

export default connect(null, mapDispatchToProps)(OptionsTriggerOpen)
