import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
class UserReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review,
      editOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors;
  }

  handleChange(e, field) {
    let review = this.state.review;
    review[field] = e.currentTarget.value;
    this.setState({ review: review });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.review.cleanliness === "" ||
      this.state.review.communication === "" ||
      this.state.review.check_in === "" ||
      this.state.review.accuracy === "" ||
      this.state.review.location === "" ||
      this.state.review.value === "" ||
      this.state.review.body === ""
    ) {
      this.errors = (
        <p className="review-form-errors">
          Please fill out all the required fields
        </p>
      );
      this.setState(this.state);
    } else {
      let rating =
        (parseInt(this.state.cleanliness) +
          parseInt(this.state.communication) +
          parseInt(this.state.check_in) +
          parseInt(this.state.accuracy) +
          parseInt(this.state.location) +
          parseInt(this.state.value)) /
        6.0;
      this.setState({ rating: rating }, () => {
        this.props.editReview(this.state.review).then(() => {
          this.props.fetchUser(this.props.review.guest_id);
          this.setState({ editOpen: false });
        });
      });

      this.errors = null;
    }
  }

  handleDelete() {
    let guestId = this.props.review.guest_id;
    this.props
      .deleteReview(this.props.review.id)
      .then(() => this.props.fetchUser(guestId));
  }

  render() {
    let review = this.props.review;
    let options = (options = {
      year: "numeric",
      month: "long",
    });
    let createdAt = new Date(review.created_at).toLocaleDateString(
      "en-US",
      options
    );

    let reviewReturn = !this.state.editOpen ? (
      <>
        <Link
          to={`/listing/show/${review.listing.id}`}
          className="user-review-listing-photo-container"
        >
          <img
            className="user-review-listing-photo"
            src={review.photos[0]}
            alt="Listing Photo"
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
          <div className="user-review-created-at-container">
            <p className="user-review-created-at">{createdAt}</p>
          </div>
          <div className="review-edit-delete-button-container">
              <span
                className="edit-review-button"
                onClick={() => this.setState({ editOpen: true })}
              >
                Edit
              </span>
              <span
                className="delete-review-button"
                onClick={() => this.handleDelete()}
              >
                Delete
              </span>
            </div>
        </div>
      </>
    ) : (
      <div className="review-form-container">
        <span className='review-cancel-edit' onClick={() => this.setState({ editOpen: false })}>Cancel</span>
        <form className="create-review-form" onSubmit={this.handleSubmit}>
          <textarea
            className="review-body"
            onChange={e => this.handleChange(e, "body")}
            placeholder="Review"
            value={this.state.review.body}
          />

          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Cleanliness</h6>
            <div className="review-stars-container">
              <label htmlFor="cleanliness1">
                <StarIcon
                  className={
                    this.state.review.cleanliness >= 1
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness1"
                name="cleanliness"
                value="1"
                onChange={e => this.handleChange(e, "cleanliness")}
              />
              <label htmlFor="cleanliness2">
                <StarIcon
                  className={
                    this.state.review.cleanliness >= 2
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness2"
                name="cleanliness"
                value="2"
                onChange={e => this.handleChange(e, "cleanliness")}
              />
              <label htmlFor="cleanliness3">
                <StarIcon
                  className={
                    this.state.review.cleanliness >= 3
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness3"
                name="cleanliness"
                value="3"
                onChange={e => this.handleChange(e, "cleanliness")}
              />
              <label htmlFor="cleanliness4">
                <StarIcon
                  className={
                    this.state.review.cleanliness >= 4
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness4"
                name="cleanliness"
                value="4"
                onChange={e => this.handleChange(e, "cleanliness")}
              />
              <label htmlFor="cleanliness5">
                <StarIcon
                  className={
                    this.state.review.cleanliness >= 5
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness5"
                name="cleanliness"
                value="5"
                onChange={e => this.handleChange(e, "cleanliness")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Communication</h6>
            <div className="review-stars-container">
              <label htmlFor="communication1">
                <StarIcon
                  className={
                    this.state.review.communication >= 1
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="communication1"
                name="communication"
                value="1"
                onChange={e => this.handleChange(e, "communication")}
              />
              <label htmlFor="communication2">
                <StarIcon
                  className={
                    this.state.review.communication >= 2
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="communication2"
                name="communication"
                value="2"
                onChange={e => this.handleChange(e, "communication")}
              />
              <label htmlFor="communication3">
                <StarIcon
                  className={
                    this.state.review.communication >= 3
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="communication3"
                name="communication"
                value="3"
                onChange={e => this.handleChange(e, "communication")}
              />
              <label htmlFor="communication4">
                <StarIcon
                  className={
                    this.state.review.communication >= 4
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="communication4"
                name="communication"
                value="4"
                onChange={e => this.handleChange(e, "communication")}
              />
              <label htmlFor="communication5">
                <StarIcon
                  className={
                    this.state.review.communication >= 5
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="communication5"
                name="communication"
                value="5"
                onChange={e => this.handleChange(e, "communication")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Check in</h6>
            <div className="review-stars-container">
              <label htmlFor="check_in1">
                <StarIcon
                  className={
                    this.state.review.check_in >= 1
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in1"
                name="check_in"
                value="1"
                onChange={e => this.handleChange(e, "check_in")}
              />
              <label htmlFor="check_in2">
                <StarIcon
                  className={
                    this.state.review.check_in >= 2
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in2"
                name="check_in"
                value="2"
                onChange={e => this.handleChange(e, "check_in")}
              />
              <label htmlFor="check_in3">
                <StarIcon
                  className={
                    this.state.review.check_in >= 3
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in3"
                name="check_in"
                value="3"
                onChange={e => this.handleChange(e, "check_in")}
              />
              <label htmlFor="check_in4">
                <StarIcon
                  className={
                    this.state.review.check_in >= 4
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in4"
                name="check_in"
                value="4"
                onChange={e => this.handleChange(e, "check_in")}
              />
              <label htmlFor="check_in5">
                <StarIcon
                  className={
                    this.state.review.check_in >= 5
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in5"
                name="check_in"
                value="5"
                onChange={e => this.handleChange(e, "check_in")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Accuracy</h6>
            <div className="review-stars-container">
              <label htmlFor="accuracy1">
                <StarIcon
                  className={
                    this.state.review.accuracy >= 1
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy1"
                name="accuracy"
                value="1"
                onChange={e => this.handleChange(e, "accuracy")}
              />
              <label htmlFor="accuracy2">
                <StarIcon
                  className={
                    this.state.review.accuracy >= 2
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy2"
                name="accuracy"
                value="2"
                onChange={e => this.handleChange(e, "accuracy")}
              />
              <label htmlFor="accuracy3">
                <StarIcon
                  className={
                    this.state.review.accuracy >= 3
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy3"
                name="accuracy"
                value="3"
                onChange={e => this.handleChange(e, "accuracy")}
              />
              <label htmlFor="accuracy4">
                <StarIcon
                  className={
                    this.state.review.accuracy >= 4
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy4"
                name="accuracy"
                value="4"
                onChange={e => this.handleChange(e, "accuracy")}
              />
              <label htmlFor="accuracy5">
                <StarIcon
                  className={
                    this.state.review.accuracy >= 5
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy5"
                name="accuracy"
                value="5"
                onChange={e => this.handleChange(e, "accuracy")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Location</h6>
            <div className="review-stars-container">
              <label htmlFor="location1">
                <StarIcon
                  className={
                    this.state.review.location >= 1
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location1"
                name="location"
                value="1"
                onChange={e => this.handleChange(e, "location")}
              />
              <label htmlFor="location2">
                <StarIcon
                  className={
                    this.state.review.location >= 2
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location2"
                name="location"
                value="2"
                onChange={e => this.handleChange(e, "location")}
              />
              <label htmlFor="location3">
                <StarIcon
                  className={
                    this.state.review.location >= 3
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location3"
                name="location"
                value="3"
                onChange={e => this.handleChange(e, "location")}
              />
              <label htmlFor="location4">
                <StarIcon
                  className={
                    this.state.review.location >= 4
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location4"
                name="location"
                value="4"
                onChange={e => this.handleChange(e, "location")}
              />
              <label htmlFor="location5">
                <StarIcon
                  className={
                    this.state.review.location >= 5
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location5"
                name="location"
                value="5"
                onChange={e => this.handleChange(e, "location")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Value</h6>
            <div className="review-stars-container">
              <label htmlFor="value1">
                <StarIcon
                  className={
                    this.state.review.value >= 1
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value1"
                name="value"
                value="1"
                onChange={e => this.handleChange(e, "value")}
              />
              <label htmlFor="value2">
                <StarIcon
                  className={
                    this.state.review.value >= 2
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value2"
                name="value"
                value="2"
                onChange={e => this.handleChange(e, "value")}
              />
              <label htmlFor="value3">
                <StarIcon
                  className={
                    this.state.review.value >= 3
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value3"
                name="value"
                value="3"
                onChange={e => this.handleChange(e, "value")}
              />
              <label htmlFor="value4">
                <StarIcon
                  className={
                    this.state.review.value >= 4
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value4"
                name="value"
                value="4"
                onChange={e => this.handleChange(e, "value")}
              />
              <label htmlFor="value5">
                <StarIcon
                  className={
                    this.state.review.value >= 5
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value5"
                name="value"
                value="5"
                onChange={e => this.handleChange(e, "value")}
              />
            </div>
          </div>

          <button className="leave-review-form-button">Update Review</button>
          {this.errors}
        </form>
      </div>
    );

    return <div className="user-review-container">{reviewReturn}</div>;
  }
}

export default UserReviewItem;
