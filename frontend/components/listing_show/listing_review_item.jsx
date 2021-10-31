import React from "react";
import { Link } from "react-router-dom";

const ListingReviewItem = ({ review }) => {
  let options = (options = {
    year: "numeric",
    month: "long",
  });
  let createdAt = new Date(review.created_at).toLocaleDateString(
    "en-US",
    options
  );
  let guestProfilePic;
  if (review.guestPhoto) {
    guestProfilePic = review.guestPhoto;
  } else {
    guestProfilePic = window.user_icon;
  }
  return (
    <div className="listing-review-container">
      <div className="listing-reviewer-container">
        <Link
          to={`/users/show/${review.guest_id}`}
          className="listing-review-listing-photo-container"
        >
          <img
            className="listing-review-listing-photo"
            src={guestProfilePic}
            alt="Profile pic"
          />
        </Link>
        <div className="reviewer-info-container">
          <h5 className="listing-reviewer-name">{review.reviewer.fname}</h5>
          <span className="listing-review-created-at">{createdAt}</span>
        </div>
      </div>
      <div className="review-body-container">
        <span className='review-body-info'>{review.body}</span>
      </div>
    </div>
  );
};

export default ListingReviewItem;
