import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateTime } from '../actions'
import Clock from '../components/Clock'

class ClockContainer extends Component {
  componentDidMount () {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    this.props.updateTime(hours, minutes, seconds)
  }

  render () {
    return (
      <Clock
        boxes={this.props.boxes}
        colorKey={this.props.colorKey}
        areNumbersVisible={this.props.areNumbersVisible}
      />
    )
  }
}

ClockContainer.propTypes = {
  boxes: PropTypes.array,
  colorKey: PropTypes.string,
  updateTime: PropTypes.func,
  areNumbersVisible: PropTypes.bool
}

const mapStateToProps = state => ({
  boxes: state.boxes,
  colorKey: state.colorKey,
  areNumbersVisible: state.areNumbersVisible
})

const mapDispatchToProps = {
  updateTime
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockContainer)
