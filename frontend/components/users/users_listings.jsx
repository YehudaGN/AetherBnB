import React from "react";
import { Link } from "react-router-dom";

const UsersListings = ({listings, userId}) => {
    let selectedListings = listings.filter(
        listing => listing.host_id === userId
      );
      return selectedListings.map((listing, idx) => {
        return (
          <li key={`${idx}${listing.id}`} className="listing-blurb">
            <div className="listing-photo-container">
              <img
                className="listing-photos"
                src={listing.photos[0]}
                height="150"
              />
            </div>
            <div className="listing-info-container">
              <Link to={`/listing/show/${listing.id}`}>
                <h3 className="listings-index-title">{listing.title}</h3>
              </Link>
              <br />
              <p>{listing.num_beds} guests</p>
              <p className="listing-price">${listing.price} / night</p>
            </div>
          </li>
        );
      });
}

export default UsersListings;