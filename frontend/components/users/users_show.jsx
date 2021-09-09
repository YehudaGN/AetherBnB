import React from 'react';
import { fetchUser } from '../../actions/user_actions';

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        if (!this.props.user) return null;
        // listings -- reviews -- bookings
        return (
            <h3>hello {this.props.user.fname}</h3>
        )
    }
}

export default UserShow;