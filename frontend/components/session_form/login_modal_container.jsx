import { connect } from "react-redux";
import LoginModal from './login_modal';
import { Link } from 'react-router-dom'; //might need to use this
import { login } from '../../actions/session_actions'

const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginModal)