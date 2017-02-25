import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { closeOptions } from '../actions'

class OptionsTriggerClose extends Component {
  render () {
    return (
      <button
        className='options_trigger--close'
        onClick={this.props.closeOptions}
      >
        <svg
          className='options_trigger--close-arrow'
          viewBox='0 0 20 20'
        >
          <path d='M20 0 L0 10 L20 20' fill='none' />
        </svg>
        Close
      </button>
    )
  }
}

OptionsTriggerClose.propTypes = {
  closeOptions: PropTypes.func
}

const mapDispatchToProps = {
  closeOptions
}

export default connect(null, mapDispatchToProps)(OptionsTriggerClose)
