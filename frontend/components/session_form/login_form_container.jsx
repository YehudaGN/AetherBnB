import { connect } from "react-redux";
import SessionForm from './session_modal';
import { Link } from 'react-router-dom'; //might need to use this
import { login } from '../../actions/session_actions'

const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = dispatch => ({
    action: user => dispatch(action(user))
})

export default connect(mSTP, mDTP)(SessionModal)