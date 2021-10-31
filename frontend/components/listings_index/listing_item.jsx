import React from "react";
import { Link } from "react-router-dom";

const ListingItem = props => {
  return (
    <Link to={`/listing/show/${props.listing.id}`} className="listing-blurb">
      <div className="listing-photo-container">
        
        <img
          className="listing-photos"
          src={props.listing.photos[0]}
          height="150"
          alt='Listing Photo'
        />
      </div>
      <div className="listing-info-container">
        <div >
          <h3 className="listings-index-title">{props.listing.title}</h3>
        </div>
        <br />
        <p>{props.listing.num_beds} guests</p>
        <p className="listing-price"><span className='listing-price-text'>${props.listing.price}</span> / night</p>
      </div>
      
    </Link>
  );
};

export default ListingItem;
