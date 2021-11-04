import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Footer from "../footer/footer";

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noBooking: false };
  }

  componentDidMount() {
    this.props.fetchBookings().then(res => {
      if (Object.values(res.bookings).length === 0)
        this.setState({ noBooking: true });
    });
  }

  render() {
    if (this.props.bookings.length === 0 && !this.state.noBooking) return null;
    if (this.state.noBooking) {
      return (
        <div className='no-bookings-container'>
          <div className='no-bookings'>
            <p className='no-bookings-text'>You haven't taken any trips yet</p>
            <Link className='no-bookings-link' to='/listings'>Take a trip</Link>
          </div>
        </div>
      )
    }
    let mappedBookings;
    mappedBookings = this.props.bookings.map((booking, idx) => {
      let options = (options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      let checkInDate = new Date(booking.start_date)
        .toLocaleDateString("en-US", options)
        .slice(4, 11);
      let checkOutDate = new Date(booking.end_date)
        .toLocaleDateString("en-US", options)
        .slice(9);
      return (
        <Link
          to={`/listing/${booking.listing_id}/booking/${booking.id}`}
          key={`${idx}${booking.id}`}
          className="booking-container"
        >
          <div className="booking-listing-index-photo-container">
            <img
              className="booking-listing-index-photo"
              src={booking.photos[0]}
              alt="Booking Photo"
            />
          </div>
          <div className="booking-index-info-container">
            <div className="booking-index-dates">
              {checkInDate} - {checkOutDate}
            </div>
            <div className="booking-index-location-container">
              <h4 className="booking-index-location">{booking.listing.city}</h4>
            </div>
            <div className="booking-index-listing-info-container">
              <div className="booking-index-listing-img-container">
                <img
                  className="booking-index-listing-img"
                  src={booking.photos[0]}
                  alt="Booking Photo"
                />
              </div>
              <div className="booking-index-listing-title-container">
                <h4 className="booking-index-listing-title">
                  {booking.listing.title}
                </h4>
                <h4 className="booking-index-listing-title-arrow-container">
                  <ArrowForwardIosIcon
                    className="arrow-icon"
                    style={{ fontSize: 13, fontWeight: 500 }}
                  />
                </h4>
              </div>
            </div>
          </div>
          <div className="more-trip-plans-container">
            <p>Show more trip plans</p>
          </div>
        </Link>
      );
    });
    return (
      <div className="bookings-index-flex-container">
        <div className="trips-h3-container">
          <h3 className="trips-h3">Trips</h3>
        </div>
        <div className="bookings-index-container">{mappedBookings}</div>
        <Footer />
      </div>
    );
  }
}

export default BookingIndex;
