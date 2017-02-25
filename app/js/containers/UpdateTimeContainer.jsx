import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateTime } from '../actions'

class UpdateTimeContainer extends Component {
  constructor () {
    super()

    this.intervalId = null
    this.startClock = this.startClock.bind(this)
    this.stopClock = this.stopClock.bind(this)
    this.getCurrentTime = this.getCurrentTime.bind(this)
  }

  componentDidMount () {
    this.startClock()
  }

  componentWillUnmount () {
    this.stopClock()
  }

  startClock () {
    this.intervalId = setInterval(this.getCurrentTime, 1000 * 15)
  }

  stopClock () {
    clearInterval(this.intervalId)
  }

  getCurrentTime () {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    this.props.updateTime(hours, minutes, seconds)
  }

  render () {
    return null
  }
}

UpdateTimeContainer.propTypes = {
  updateTime: PropTypes.func
}

const mapDispatchToProps = {
  updateTime
}

export default connect(null, mapDispatchToProps)(UpdateTimeContainer)
