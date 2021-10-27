import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import StarIcon from "@material-ui/icons/Star";
import HomeIcon from "@material-ui/icons/Home";
const ListingHeaderBar = ({ city, state, reviewRating, numReviews, numBeds }) => {
  return (
    <ul className="reviews-address-beds-ul">
      <li className="reviews-point">
        <StarIcon className="star-icon" style={{ fontSize: 20 }} />
        <span>{reviewRating}</span>
        <span className="listing-show-reviews-num-reviews">
          ({numReviews} reviews)
        </span>
      </li>
      <li className="address-point">
        <RoomIcon className="room-icon" style={{ fontSize: 20 }} />
        {city}, {state}
      </li>

      <li className="guest-amount-point">
        <HomeIcon className="home-icon" style={{ fontSize: 20 }} />{" "}
        {numBeds} guests
      </li>
    </ul>
  );
};

export default ListingHeaderBar;
