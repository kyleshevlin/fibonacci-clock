import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import OptionsMenu from '../components/OptionsMenu'
import { updateColorKey } from '../actions'

class OptionsMenuContainer extends Component {
  constructor () {
    super()

    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange (e) {
    this.props.updateColorKey(e.target.value)
  }

  render () {
    return (
      <OptionsMenu
        colorKey={this.props.colorKey}
        isOptionsOpen={this.props.isOptionsOpen}
        handleSelectChange={this.handleSelectChange}
      />
    )
  }
}

OptionsMenuContainer.propTypes = {
  colorKey: PropTypes.string,
  isOptionsOpen: PropTypes.bool,
  updateColorKey: PropTypes.func
}

const mapStateToProps = state => ({
  colorKey: state.colorKey,
  isOptionsOpen: state.isOptionsOpen
})

const mapDispatchToProps = {
  updateColorKey
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsMenuContainer)
