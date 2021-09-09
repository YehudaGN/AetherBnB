import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        if (!this.props.user) return null;
        // listings -- reviews -- bookings
        return (
            <div className='user-show-container'>
                <h3>Hello {this.props.user.fname} {this.props.user.lname}</h3>
                <p>{this.props.user.bio}</p>

                <ul>
                    <h4>Listings</h4>
                    <Link to='/new/listing'>Create Listing</Link>
                </ul>
                <ul>
                    <h4>Bookings</h4>
                </ul>
                <ul>
                    <h4>Reviews</h4>
                </ul>
            </div>
            
        )
    }
}

export default UserShow;