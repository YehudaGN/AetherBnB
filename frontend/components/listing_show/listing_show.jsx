import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from "@material-ui/icons/Room";
import StarIcon from "@material-ui/icons/Star";
import mapboxgl from "mapbox-gl";

// import CreateBooking from "../booking_form/booking_form";
import CreateBookingContainer from "../booking_form/booking_form_container";

class ListingShow extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);

    // mapboxgl.accessToken = 'pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA';
    // this.map = new mapboxgl.Map({
    // container: 'map-show', // container ID
    // style: 'mapbox://styles/mapbox/streets-v11', // style URL
    // center: [this.props.listing.longitude, this.props.listing.latitude], // starting position [lng, lat]
    // zoom: 12 // starting zoom
    // });
  }

  handleDelete() {
    this.props.deleteListing(this.props.match.params.listingId);
    this.props.history.push("/");
  }

  render() {
    if (!this.props.listing) return null;
    if (!this.props.listing.host) return null;
    let deleteButton;

    if (this.props.listing.host_id === this.props.session) {
      deleteButton = (
        <button
          className="delete-listing-button"
          onClick={() => this.handleDelete()}
        >
          Delete Listing
        </button>
      );
    }

    let photos = this.props.listing.photos.map(photo => (
      <img src={photo} height="300" />
    ));
    let host = this.props.listing.host;
    return (
      <div className="listing-show-container">
        <div className="listing-show">
          <div className="listing-title-container">
            <h4 className="listing-title">{this.props.listing.title}</h4>
          </div>

          <br />
          <div className="reviews-address-beds-container">
            <ul className="reviews-address-beds-ul">
              <li className="reviews-point">
                <StarIcon className="star-icon" style={{ fontSize: 20 }} />
                Reviews
              </li>
              <li className="address-point">
                <RoomIcon className="room-icon" style={{ fontSize: 20 }} />
                {this.props.listing.city}, {this.props.listing.state}
              </li>
              <br />
              <li className="guest-amount-point">
                <HomeIcon className="home-icon" style={{ fontSize: 20 }} />{" "}
                {this.props.listing.num_beds} guests
              </li>
            </ul>
          </div>
          <br />
          <div className="photos-container">{photos}</div>
          <br />
          <div className="host-info-booking-form-flex">
            <div className="host-info-booking-form-container">
              <div className="host-info-listing-desc-container">
                <Link
                  to={`/users/show/${host.id}`}
                  className="host-pic-plus-meet-host"
                >
                  <div className="host-pic-container">
                    <img className="host-pic" src={window.user_icon} alt="" />
                  </div>
                  <div className="meet-host-container">
                    <h3 className="host-info-h3">
                      Meet your Host, {host.fname} {host.lname}
                    </h3>
                    <br />
                    <p className="host-info-created-at">
                      Hosting since {host.created_at.slice(0, 4)}
                    </p>
                  </div>
                </Link>

                <br />
                <div className="listing-description-container">
                  <h3 className="description-h3">
                    All about {host.fname}'s place
                  </h3>
                  <br />
                  <p className="listing-description">
                    {this.props.listing.description}
                  </p>
                </div>
              </div>
              <div className="booking-form-container">
                <div className="booking-form-top">
                  <div className="booking-price-container">
                    <li className="booking-price">
                      ${this.props.listing.price}
                    </li>
                    <li className="night">/night</li>
                  </div>
                  <div className="booking-form-reviews">
                    <StarIcon className="star-icon" style={{ fontSize: 20 }} />{" "}
                    Reviews
                  </div>
                  <CreateBookingContainer bookedDates={this.props.listing.bookings}/>
                </div>
              </div>
              <br />
            </div>
          </div>
          <br />
          {/* <div className='map-show' width='500' height ='500'>

          </div> */}
          <br />
          {deleteButton}
        </div>
      </div>
    );
  }
}
export default ListingShow;
