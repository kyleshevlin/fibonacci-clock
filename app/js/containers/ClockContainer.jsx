import { connect } from 'react-redux'
import Clock from '../components/Clock'

const mapStateToProps = state => ({
  boxes: state.boxes
})

export default connect(mapStateToProps)(Clock)
