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
      editOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchListings();
  }

  componentDidUpdate() {
    if (!this.state.bio) this.setState({ bio: this.props.user.bio });
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleBio(e) {
    this.setState({ bio: e.currentTarget.value });
  }

  handleCancel(e) {
    this.setState({ editOpen: false, bio: this.props.user.bio });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.props.user.email,
      fname: this.props.user.fname,
      lname: this.props.user.lname,
      bio: this.state.bio,
      id: this.props.user.id,
    };
    this.props.updateUser(user);
    this.setState({ editOpen: false });
  }

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
    let editProfileForm;
    if (this.state.editOpen) {
      editProfileForm = (
          <form
            className="edit-profile-form"
            onSubmit={e => this.handleSubmit(e)}
          >
          <h3 className='about-h3'>About</h3>
            <textarea
              className="edit-profile-bio"
              value={this.state.bio}
              onChange={e => this.handleBio(e)}
            ></textarea>
            <div className="user-update-form-buttons-container">
              <li
                className="edit-profile-cancel-li"
                onClick={() => this.handleCancel()}
              >
                Cancel
              </li>
              <button className="edit-profile-save-button">Save</button>
            </div>
          </form>
          
      );
    } else {
      editProfileForm = "";
    }
    return (
      <div className="user-show-container">
        <div className="user-info-container">
          <div className="profile-picture-div">
            <img className="user-icon" src={profilePic} alt="Profile pic" />
            {this.props.currentUserId ===
            parseInt(this.props.match.params.userId) ? (
              <Link
                className="update-photo-link"
                to={`/user/${this.props.user.id}/edit-photo`}
              >
                Update Photo
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="user-welcome-plus-info-container">
            <h3 className="user-welcome">Hi, i'm {this.props.user.fname}</h3>
            <br />
            <p className="joined-at">
              Joined in {this.props.user.created_at.slice(0, 4)}
            </p>

            <br />

            <div className="edit-user">
              <li
                className="edit-profile-button"
                onClick={() => this.setState({ editOpen: true })}
              >
                Edit profile
              </li>
              {editProfileForm}
            </div>

            <br />
            {this.state.editOpen ? (
              ""
            ) : (
              <div className="user-info">
                <h3 className="about-h3">About</h3>
                <p className="bio">{this.props.user.bio}</p>
              </div>
            )}
          </div>
        </div>
        <div className="listings-bookings-reviews-container">
          <div className="listings-container">
            <div>
              <h4 className="listings-h4">Listings</h4>

              <div>
                <UsersListings
                  listings={this.props.listings}
                  userId={this.props.user.id}
                />
              </div>
            </div>
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
