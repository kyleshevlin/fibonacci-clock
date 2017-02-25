import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleNumbers } from '../actions'

class NumbersToggle extends Component {
  render () {
    return (
      <div className='numbers_toggle'>
        <h3 className='numbers_toggle-heading'>Toggle Numbers On/Off</h3>
        <input
          className='numbers_toggle-checkbox'
          type='checkbox'
          checked={this.props.areNumbersVisible}
          onChange={this.props.toggleNumbers}
        />
      </div>
    )
  }
}

NumbersToggle.propTypes = {
  areNumbersVisible: PropTypes.bool,
  toggleNumbers: PropTypes.func
}

const mapStateToProps = state => ({
  areNumbersVisible: state.areNumbersVisible
})

const mapDispatchToProps = {
  toggleNumbers
}

export default connect(mapStateToProps, mapDispatchToProps)(NumbersToggle)
