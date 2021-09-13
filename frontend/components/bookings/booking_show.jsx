import React from "react";

class BookingShow extends React.Component {
  componentDidMount() {
    this.props.fetchBooking(this.props.match.params.bookingId);
  }

  cancelBooking() {
    this.props
      .deleteBooking(this.props.match.params.bookingId)
      .then(this.props.history.push("/"));
  }

  render() {
    if (!this.props.booking) return null;
    let booking = this.props.booking;
    let listing = booking.listing;
    let options = (options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    let checkInDate = new Date(booking.start_date).toLocaleDateString(
      "en-US",
      options
    );
    let checkOutDate = new Date(booking.end_date).toLocaleDateString(
      "en-US",
      options
    );
    return (
      <div className="booking-show-container-container">
        <div className="booking-show-container">
          <div className="home-res-header-container">
            <h6 className="home-res-header">Your home reservation</h6>
          </div>
          <div className="your-stay-at-host-container">
            <h3 className="your-stay-at-host">
              Your stay at {booking.host.fname}'s place
            </h3>
          </div>
          <div className="booking-listing-image-container">
            <img
              className="booking-listing-image"
              src={booking.photos[0]}
              alt=""
            />
          </div>
          <div className="booking-listing-title-container">
            <h3 className="booking-listing-title">{listing.title}</h3>
          </div>
          <div className="check-in-check-out-container">
            <div className="check-in-container">
              <h5 className="check-in">Check In</h5>
              <p className="check-in-date">{checkInDate}</p>
            </div>
            <div className="border-div"></div>
            <div className="check-out-container">
              <h5 className="check-out">Check Out</h5>
              <p className="check-out-date">{checkOutDate}</p>
            </div>
          </div>

          <div className="booking-details-container">
            <div className="booking-details-h3-container">
              <h3 className="booking-details-h3">Reservation Details</h3>
            </div>
            <div className="whos-coming-container">
              <h4 className="whos-coming-h4">Who's coming</h4>
              <p className="booking-details-guest-num">
                {booking.num_guests} guests
              </p>
            </div>

            <div className="getting-there-container">
              <div className="getting-there-h3-container">
                <h3 className="getting-there-h3">Getting there</h3>
              </div>
              <div className="address-container">
                <div className="address-h5-container">
                  <h5 className="address-h5">Address</h5>
                </div>
                <p className="booking-listing-address">{listing.address}</p>
                <p className="booking-listing-state-city-zip">
                  {listing.city}, {listing.state}, {listing.zip_code}
                </p>
              </div>
            </div>

            <div className="cancel-booking-container">
              <button
                className="cancel-booking-button"
                onClick={() => this.cancelBooking()}
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingShow;
