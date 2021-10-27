import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import UsersListings from "./users_listings";
import UserReviewItem from "./user_review_item";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchListings();
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    if (!this.props.user) return null;

    let createListingButton;
    if (this.props.user.id === this.props.currentUserId) {
      createListingButton = (
        <li
          className="create-listing-li"
          onClick={() => this.props.openModal("create listing")}
        >
          Create Listing
        </li>
      );
    } else {
      createListingButton = "";
    }

    let userReviews;
    if (
      parseInt(this.props.match.params.userId) === this.props.currentUserId &&
      this.props.user.user_reviews
    ) {
      userReviews = this.props.user.user_reviews.map((review, idx) => (
        <div key={`${idx}${review.id}`} className="user-review-item-container">
          <UserReviewItem review={review} />
        </div>
      ));
    }
    let profilePic;
    if (this.props.user.photo) {
      profilePic = this.props.user.photo;
    } else {
      profilePic = window.user_icon;
    }
    return (
      <div className="user-show-container">
        <div className="user-info-container">
          <div className="profile-picture-div">
            <img className="user-icon" src={profilePic} alt="" />
            <br />
            <Link
              className="update-photo-link"
              to={`/user/${this.props.user.id}/edit-photo`}
            >
              Update Photo
            </Link>
          </div>
          <div className="user-welcome-plus-info-container">
            <h3 className="user-welcome">Hi, i'm {this.props.user.fname}</h3>
            <br />
            <p className="joined-at">
              Joined in {this.props.user.created_at.slice(0, 4)}
            </p>

            <br />

            <div className="edit-user">
              <li>Edit User</li>
            </div>

            <br />
            <div className="user-info">
              <h3 className="about-h3">About</h3>

              <br />

              <p className="bio">{this.props.user.bio}</p>
            </div>
          </div>
        </div>
        <div className="listings-bookings-reviews-container">
          <div className="listings-container">
            <ul>
              <h4 className="listings-h4">Listings</h4>

              <ul>
                <UsersListings
                  listings={this.props.listings}
                  userId={this.props.user.id}
                />
              </ul>
            </ul>
            {createListingButton}
          </div>

          <br />

          {parseInt(this.props.match.params.userId) ===
          this.props.currentUserId ? (
            <div className="user-reviews-container">
              <h4 className="reviews-by-you-h4">Reviews by you</h4>
              <div className="user-reviews">{userReviews}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserShow;
