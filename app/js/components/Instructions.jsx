import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import colors from '../constants/colors'

class Instructions extends Component {
  render () {
    const boxStyles = {
      display: 'inline-block',
      width: 20,
      height: 20,
      marginBottom: '-2px'
    }
    const hoursBox = (
      <span style={{
        ...boxStyles,
        backgroundColor: colors[this.props.colorKey][1]
      }} />
    )
    const minutesBox = (
      <span style={{
        ...boxStyles,
        backgroundColor: colors[this.props.colorKey][2]
      }} />
    )
    const bothBox = (
      <span style={{
        ...boxStyles,
        backgroundColor: colors[this.props.colorKey][3]
      }} />
    )

    return (
      <section className='instructions'>
        <h3>How to Use a Fibonacci Clock</h3>

        <p>
          Believe it or not, you can tell time, in 5-minute increments, with just five boxes following the <a href='https://en.wikipedia.org/wiki/Fibonacci_number'>Fibonacci numbers</a>. Here's how:
        </p>

        <p>
          Each square is worth the length of one of its sides. Thus, if we assign the smallest squares the value of 1, you end up with five boxes whose values are 1, 1, 2, 3, and 5.
        </p>

        <p>
          {`To calculate the hours, add up the value of the `}{hoursBox}{` and `}{bothBox}{` squares. For example, if you have a `}{hoursBox}{` worth 1, and a `}{bothBox}{` worth 5, you have 6 hours.`}
        </p>

        <p>
          {`Then, to calculate the minutes, add up the values of the `}{minutesBox}{` and `}{bothBox}{` squares and multiply this value by 5. For example, if you have a couple `}{minutesBox}{` squares worth 1 and 3, and a `}{bothBox}{` worth 2, you have 30 minutes.`}
        </p>

        <p>
          Together, these numbers represent the closest 5-minute increment using a standard 12-hour clock. Isn't that cool?
        </p>
      </section>
    )
  }
}

Instructions.propTypes = {
  colorKey: PropTypes.string
}

const mapStateToProps = state => ({
  colorKey: state.colorKey
})

export default connect(mapStateToProps)(Instructions)
