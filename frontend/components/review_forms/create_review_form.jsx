import React from "react";
import StarIcon from "@material-ui/icons/Star";

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let rating =
      (parseInt(this.state.cleanliness) +
        parseInt(this.state.communication) +
        parseInt(this.state.check_in) +
        parseInt(this.state.accuracy) +
        parseInt(this.state.location) +
        parseInt(this.state.value)) /
      6.0;
    this.setState({ rating: rating }, () => {
      this.props.createReview(this.state).then(() => this.props.closeModal());
    });
  }

  render() {
    // debugger
    return (
      <div className="review-form-container">
        <form className="create-review-form" onSubmit={this.handleSubmit}>
          <textarea
            className="review-body"
            onChange={this.handleChange("body")}
            placeholder="Review"
            value={this.state.body}
          />

          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Cleanliness</h6>
            <div className="review-stars-container">
              <label htmlFor="cleanliness1">
                <StarIcon
                  className={
                    this.state.cleanliness >= 1 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness1"
                name="cleanliness"
                value="1"
                onChange={this.handleChange("cleanliness")}
              />
              <label htmlFor="cleanliness2">
                <StarIcon
                  className={
                    this.state.cleanliness >= 2 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness2"
                name="cleanliness"
                value="2"
                onChange={this.handleChange("cleanliness")}
              />
              <label htmlFor="cleanliness3">
                <StarIcon
                  className={
                    this.state.cleanliness >= 3 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness3"
                name="cleanliness"
                value="3"
                onChange={this.handleChange("cleanliness")}
              />
              <label htmlFor="cleanliness4">
                <StarIcon
                  className={
                    this.state.cleanliness >= 4 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness4"
                name="cleanliness"
                value="4"
                onChange={this.handleChange("cleanliness")}
              />
              <label htmlFor="cleanliness5">
                <StarIcon
                  className={
                    this.state.cleanliness >= 5 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="cleanliness5"
                name="cleanliness"
                value="5"
                onChange={this.handleChange("cleanliness")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Communication</h6>
            <div className="review-stars-container">
              <label htmlFor="communication1">
                <StarIcon
                  className={
                    this.state.communication >= 1
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
                onChange={this.handleChange("communication")}
              />
              <label htmlFor="communication2">
                <StarIcon
                  className={
                    this.state.communication >= 2
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
                onChange={this.handleChange("communication")}
              />
              <label htmlFor="communication3">
                <StarIcon
                  className={
                    this.state.communication >= 3
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
                onChange={this.handleChange("communication")}
              />
              <label htmlFor="communication4">
                <StarIcon
                  className={
                    this.state.communication >= 4
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
                onChange={this.handleChange("communication")}
              />
              <label htmlFor="communication5">
                <StarIcon
                  className={
                    this.state.communication >= 5
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
                onChange={this.handleChange("communication")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Check in</h6>
            <div className="review-stars-container">
              <label htmlFor="check_in1">
                <StarIcon
                  className={
                    this.state.check_in >= 1 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in1"
                name="check_in"
                value="1"
                onChange={this.handleChange("check_in")}
              />
              <label htmlFor="check_in2">
                <StarIcon
                  className={
                    this.state.check_in >= 2 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in2"
                name="check_in"
                value="2"
                onChange={this.handleChange("check_in")}
              />
              <label htmlFor="check_in3">
                <StarIcon
                  className={
                    this.state.check_in >= 3 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in3"
                name="check_in"
                value="3"
                onChange={this.handleChange("check_in")}
              />
              <label htmlFor="check_in4">
                <StarIcon
                  className={
                    this.state.check_in >= 4 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in4"
                name="check_in"
                value="4"
                onChange={this.handleChange("check_in")}
              />
              <label htmlFor="check_in5">
                <StarIcon
                  className={
                    this.state.check_in >= 5 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="check_in5"
                name="check_in"
                value="5"
                onChange={this.handleChange("check_in")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Accuracy</h6>
            <div className="review-stars-container">
              <label htmlFor="accuracy1">
                <StarIcon
                  className={
                    this.state.accuracy >= 1 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy1"
                name="accuracy"
                value="1"
                onChange={this.handleChange("accuracy")}
              />
              <label htmlFor="accuracy2">
                <StarIcon
                  className={
                    this.state.accuracy >= 2 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy2"
                name="accuracy"
                value="2"
                onChange={this.handleChange("accuracy")}
              />
              <label htmlFor="accuracy3">
                <StarIcon
                  className={
                    this.state.accuracy >= 3 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy3"
                name="accuracy"
                value="3"
                onChange={this.handleChange("accuracy")}
              />
              <label htmlFor="accuracy4">
                <StarIcon
                  className={
                    this.state.accuracy >= 4 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy4"
                name="accuracy"
                value="4"
                onChange={this.handleChange("accuracy")}
              />
              <label htmlFor="accuracy5">
                <StarIcon
                  className={
                    this.state.accuracy >= 5 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="accuracy5"
                name="accuracy"
                value="5"
                onChange={this.handleChange("accuracy")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Location</h6>
            <div className="review-stars-container">
              <label htmlFor="location1">
                <StarIcon
                  className={
                    this.state.location >= 1 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location1"
                name="location"
                value="1"
                onChange={this.handleChange("location")}
              />
              <label htmlFor="location2">
                <StarIcon
                  className={
                    this.state.location >= 2 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location2"
                name="location"
                value="2"
                onChange={this.handleChange("location")}
              />
              <label htmlFor="location3">
                <StarIcon
                  className={
                    this.state.location >= 3 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location3"
                name="location"
                value="3"
                onChange={this.handleChange("location")}
              />
              <label htmlFor="location4">
                <StarIcon
                  className={
                    this.state.location >= 4 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location4"
                name="location"
                value="4"
                onChange={this.handleChange("location")}
              />
              <label htmlFor="location5">
                <StarIcon
                  className={
                    this.state.location >= 5 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="location5"
                name="location"
                value="5"
                onChange={this.handleChange("location")}
              />
            </div>
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Value</h6>
            <div className="review-stars-container">
              <label htmlFor="value1">
                <StarIcon
                  className={
                    this.state.value >= 1 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value1"
                name="value"
                value="1"
                onChange={this.handleChange("value")}
              />
              <label htmlFor="value2">
                <StarIcon
                  className={
                    this.state.value >= 2 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value2"
                name="value"
                value="2"
                onChange={this.handleChange("value")}
              />
              <label htmlFor="value3">
                <StarIcon
                  className={
                    this.state.value >= 3 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value3"
                name="value"
                value="3"
                onChange={this.handleChange("value")}
              />
              <label htmlFor="value4">
                <StarIcon
                  className={
                    this.state.value >= 4 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value4"
                name="value"
                value="4"
                onChange={this.handleChange("value")}
              />
              <label htmlFor="value5">
                <StarIcon
                  className={
                    this.state.value >= 5 ? "review-number-selected" : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="value5"
                name="value"
                value="5"
                onChange={this.handleChange("value")}
              />
            </div>
          </div>

          <button className={`leave-review-form-button ${
                this.state.cleanliness === "" ||
                this.state.communication === "" ||
                this.state.check_in === "" ||
                this.state.accuracy === "" ||
                this.state.location === "" ||
                this.state.value === "" ||
                this.state.body === ""
                  ? "incomplete-form"
                  : ""
              }`}>Leave Review</button>

          
        </form>
      </div>
    );
  }
}

export default CreateReview;
