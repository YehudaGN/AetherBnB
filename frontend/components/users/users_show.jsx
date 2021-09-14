import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class UserShow extends React.Component {
    
    constructor(props) {
        super(props);  
        this.state = {
            open: false
        };
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchListings();
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        if (!this.props.user) return null;
        // listings -- reviews -- bookings
        let selectedListings = this.props.listings.filter(listing => listing.host_id === this.props.user.id);

        let mappedSelectedListings = selectedListings.map(listing => {
            return (
                <li className='listing-blurb'>
                    <div className="listing-photo-container">
                        <img className="listing-photos" src={listing.photos[0]} height="150" />
                    </div>
                    <div className='listing-info-container'>
                        <Link to={`/listing/show/${listing.id}`}>
                            <h3 className='listings-index-title'>{listing.title}</h3>
                        </Link>
                        <br />
                        <p>{listing.num_beds} guests</p>
                        <p className='listing-price'>${listing.price} / night</p>
                    </div>
                </li>
            )
        })
        let createListingButton;
        if (this.props.user.id === this.props.currentUserId) {
            createListingButton = <li className='create-listing-li' onClick={() => this.props.openModal('create listing')}>Create Listing</li>
        } else {
            createListingButton = ''
        }

        return (
            <div className='user-show-container'>
                <div className='user-info-container'>
                    <div className='profile-picture-div'> 
                        <img className='user-icon' src={window.user_icon} alt="" />
                        <br />
                        <Link className='update-photo-link' to='/users/edit-photo'>Update Photo</Link>
                    </div>
                    <div className='user-welcome-plus-info-container'>

                        <h3 className="user-welcome">Hi, i'm {this.props.user.fname}</h3>
                        <br />
                        <p className='joined-at'>Joined in {this.props.user.created_at.slice(0,4)}</p>

                        <br />
                        
                        <div className = 'edit-user'>
                            <li>
                                Edit User
                            </li>
                        </div>

                        <br />
                        <div className='user-info'>
                            <h3 className='about-h3'>About</h3>

                            <br />

                            <p className='bio'>{this.props.user.bio}</p>
                        </div>

                    </div>
                </div>
                <div className='listings-bookings-reviews-container'>
                    <div className='listings-container'>
                        <ul>
                            <h4 className='listings-h4'>Listings</h4>

                            <ul>
                                {mappedSelectedListings}
                            </ul>

                        </ul>
                        {createListingButton}
                    </div>

                    <br />

                    <div className='bookings-container'>
                        <ul>
                            <h4>Bookings</h4>
                        </ul>
                    </div>

                    <br />

                    <div className='reviews-container'>
                        <ul>
                            <h4>Reviews by you</h4>
                        </ul>
                    </div>
                </div>

            </div>
            
        )
    }
}

export default UserShow;