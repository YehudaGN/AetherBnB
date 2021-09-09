import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

class UserShow extends React.Component {
    
    constructor(props) {
        super(props);  
        this.state = {
            open: false
        };
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        if (!this.props.user) return null;
        // listings -- reviews -- bookings
        return (
            <div className='user-show-container'>
                <h3>Hello {this.props.user.fname} {this.props.user.lname}</h3>
                <p>{this.props.user.bio}</p>

                <ul>
                    <h4>Listings</h4>
                    <li className='create-listing-li' onClick={() => this.props.openModal('create listing')}>Create Listing</li>
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