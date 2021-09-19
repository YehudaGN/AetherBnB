import React from "react";
import { Link } from "react-router-dom";

const UserBookingItem = ({booking}) => {
    return (
        <div className="user-bookings-container">
          <div className="user-bookings-listing-title">
            <Link to={`/listing/show/${booking.listing.id}`}>{booking.listing.title}</Link>
          </div>
        </div>
    )
}

export default UserBookingItem;