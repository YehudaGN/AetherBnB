import { connect } from "react-redux";
import React from 'react';
import LoginModal from './login_modal';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    signupModal: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Signup
        </button>
      ),
      closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(LoginModal)