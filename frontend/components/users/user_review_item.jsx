import React from "react";
import { Link } from "react-router-dom";

const UserReviewItem = ({review}) => {
    return (
        <div className="user-reviews-container">
          <div className="user-reviews-listing-title">
            <h5>{review.listing.title}</h5>
          </div>
        </div>
    )
}

export default UserReviewItem;