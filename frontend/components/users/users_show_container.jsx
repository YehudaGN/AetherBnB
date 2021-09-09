import { connect } from 'react-redux';
import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './users_show';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(UserShow);