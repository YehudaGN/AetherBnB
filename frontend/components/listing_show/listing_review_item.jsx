import React from "react";
import { Link } from "react-router-dom";

const ListingReviewItem = ({review}) => {
    // debugger
    return (
        <div className="listing-review-container">
          <div className="listing-reviewer-container">
            <h5 className="listing-reviewer-name">{review.reviewer.fname}</h5>
            <span className="listing-review-created-at">
              {review.created_at}
            </span>
          </div>
          <div className="review-body-container">
            <span>{review.body}</span>
          </div>
        </div>
    )
}

export default ListingReviewItem;