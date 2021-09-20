import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';


const mSTP= ({ entities, session }) => ({
    currentUser: session.id,
    user: entities.users[session.id]
  });

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(Header));