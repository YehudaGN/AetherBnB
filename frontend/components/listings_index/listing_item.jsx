import React from "react";
import { Link } from "react-router-dom";

const ListingItem = props => {
  return (
    <li className="listing-blurb">
      <div className="listing-photo-container">
        <img
          className="listing-photos"
          src={props.listing.photos[0]}
          height="150"
        />
      </div>
      <div className="listing-info-container">
        <Link to={`/listing/show/${props.listing.id}`}>
          <h3 className="listings-index-title">{props.listing.title}</h3>
        </Link>
        <br />
        <p>{props.listing.num_beds} guests</p>
        <p className="listing-price">${props.listing.price} / night</p>
      </div>
    </li>
  );
};

export default ListingItem;
