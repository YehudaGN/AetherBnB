import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Footer from "../footer/footer";

class BookingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    if (this.props.bookings.length === 0) return null;
    let mappedBookings;
    mappedBookings = this.props.bookings.map(booking => {
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
        debugger
      return (
        <Link to={`/bookings/show/${booking.id}`} className="booking-container">
          <div className="booking-listing-index-photo-container">
            <img
              className="booking-listing-index-photo"
              src={booking.photos[0]}
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
                />
              </div>
              <div className="booking-index-listing-title-container">
                <h4 className="booking-index-listing-title">
                  {booking.listing.title}
                </h4>
                <h4 className='booking-index-listing-title-arrow-container'>
                    <ArrowForwardIosIcon className='arrow-icon' style={{ fontSize: 13, fontWeight: 500 }}/>
                </h4>
              </div>
            </div>
          </div>
          <div className='more-trip-plans-container'>
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
