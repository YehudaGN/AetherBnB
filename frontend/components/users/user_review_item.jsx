import React from "react";
import { Link } from "react-router-dom";

const UserReviewItem = ({ review }) => {
  let options = (options = {
    year: "numeric",
    month: "long",
  });
  let createdAt = new Date(review.created_at).toLocaleDateString(
    "en-US",
    options
  );
  return (
    <div className="user-review-container">
      <Link to={`/listing/show/${review.listing.id}`} className="user-review-listing-photo-container">
        <img
          className="user-review-listing-photo"
          src={review.photos[0]}
          alt=""
        />
      </Link>
      <div className="user-review-info-container">
        <div className="user-review-listing-title-container">
          <h5 className="user-review-listing-title">
            Review for {review.listing.title}
          </h5>
        </div>
        <div className="user-review-body-container">
          <p className="user-review-body">{review.body}</p>
        </div>
        <div className='user-review-created-at-container'>
          <p className='user-review-created-at'>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReviewItem;
