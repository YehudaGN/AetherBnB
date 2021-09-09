import { connect } from 'react-redux';
import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './users_show';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(UserShow);