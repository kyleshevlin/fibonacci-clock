import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { closeOptions } from '../actions'

class OptionsTriggerClose extends Component {
  render () {
    return <button className='options_trigger--close' onClick={this.props.closeOptions}>Close</button>
  }
}

OptionsTriggerClose.propTypes = {
  closeOptions: PropTypes.func
}

const mapDispatchToProps = {
  closeOptions
}

export default connect(null, mapDispatchToProps)(OptionsTriggerClose)
