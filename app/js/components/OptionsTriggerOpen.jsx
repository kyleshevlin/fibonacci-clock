import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { openOptions } from '../actions'

class OptionsTriggerOpen extends Component {
  render () {
    return <button className='options_trigger--open' onClick={this.props.openOptions}>Open</button>
  }
}

OptionsTriggerOpen.propTypes = {
  openOptions: PropTypes.func
}

const mapDispatchToProps = {
  openOptions
}

export default connect(null, mapDispatchToProps)(OptionsTriggerOpen)
