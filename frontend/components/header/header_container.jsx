import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';


const mSTP= ({ session }) => ({
    currentUser: session.id
  });

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(Header));