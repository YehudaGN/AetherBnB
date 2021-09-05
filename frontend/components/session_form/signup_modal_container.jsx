import { connect } from "react-redux";
import React from 'react';
import SignupModal from './signup_modal';
import { signup } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    loginModal: (
        <button onClick={() => dispatch(openModal('login'))}>
          Signup
        </button>
      ),
      closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SignupModal);