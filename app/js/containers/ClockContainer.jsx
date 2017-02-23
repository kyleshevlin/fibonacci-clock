import { connect } from 'react-redux'
import Clock from '../components/Clock'

const mapStateToProps = state => ({
  boxes: state.boxes,
  colorKey: state.colorKey
})

export default connect(mapStateToProps)(Clock)
