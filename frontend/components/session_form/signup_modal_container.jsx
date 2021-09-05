import { connect } from "react-redux";
import SignupModal from './signup_modal';
import { Link } from 'react-router-dom'; //might need to use this
import { signup } from '../../actions/session_actions'

const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SignupModal)