import React from "react";

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
    //   debugger
    e.preventDefault();
    let rating = (this.state.cleanliness + this.state.communication + this.state.check_in + this.state.accuracy + this.state.location + this.state.value) / 6.0
    this.setState({rating: rating}, () => {
        this.props.createReview(this.state)
    })
    
    // .then(()=>{
    //     this.setState({
    //         body: "",
    //         rating: "",
    //         guest_id: "",
    //         listing_id: "",
    //         cleanliness: "",
    //         communication: "",
    //         check_in: "",
    //         accuracy: "",
    //         location: "",
    //         value: "",
    //       });
    //     })
  }

  render() {
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
            <label htmlFor="cleanliness1">1</label>
            <input
              type="radio"
              id="cleanliness1"
              name="cleanliness"
              value="1"
              onChange={this.handleChange("cleanliness")}
            />
            <label htmlFor="cleanliness2">2</label>
            <input
              type="radio"
              id="cleanliness2"
              name="cleanliness"
              value="2"
              onChange={this.handleChange("cleanliness")}
            />
            <label htmlFor="cleanliness3">3</label>
            <input
              type="radio"
              id="cleanliness3"
              name="cleanliness"
              value="3"
              onChange={this.handleChange("cleanliness")}
            />
            <label htmlFor="cleanliness4">4</label>
            <input
              type="radio"
              id="cleanliness4"
              name="cleanliness"
              value="4"
              onChange={this.handleChange("cleanliness")}
            />
            <label htmlFor="cleanliness5">5</label>
            <input
              type="radio"
              id="cleanliness5"
              name="cleanliness"
              value="5"
              onChange={this.handleChange("cleanliness")}
            />
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Communication</h6>
            <label htmlFor="communication1">1</label>
            <input
              type="radio"
              id="communication1"
              name="communication"
              value="1"
              onChange={this.handleChange("communication")}
            />
            <label htmlFor="communication2">2</label>
            <input
              type="radio"
              id="communication2"
              name="communication"
              value="2"
              onChange={this.handleChange("communication")}
            />
            <label htmlFor="communication3">3</label>
            <input
              type="radio"
              id="communication3"
              name="communication"
              value="3"
              onChange={this.handleChange("communication")}
            />
            <label htmlFor="communication4">4</label>
            <input
              type="radio"
              id="communication4"
              name="communication"
              value="4"
              onChange={this.handleChange("communication")}
            />
            <label htmlFor="communication5">5</label>
            <input
              type="radio"
              id="communication5"
              name="communication"
              value="5"
              onChange={this.handleChange("communication")}
            />
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Check in</h6>
            <label htmlFor="check_in1">1</label>
            <input
              type="radio"
              id="check_in1"
              name="check_in"
              value="1"
              onChange={this.handleChange("check_in")}
            />
            <label htmlFor="check_in2">2</label>
            <input
              type="radio"
              id="check_in2"
              name="check_in"
              value="2"
              onChange={this.handleChange("check_in")}
            />
            <label htmlFor="check_in3">3</label>
            <input
              type="radio"
              id="check_in3"
              name="check_in"
              value="3"
              onChange={this.handleChange("check_in")}
            />
            <label htmlFor="check_in4">4</label>
            <input
              type="radio"
              id="check_in4"
              name="check_in"
              value="4"
              onChange={this.handleChange("check_in")}
            />
            <label htmlFor="check_in5">5</label>
            <input
              type="radio"
              id="check_in5"
              name="check_in"
              value="5"
              onChange={this.handleChange("check_in")}
            />
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Accuracy</h6>
            <label htmlFor="accuracy1">1</label>
            <input
              type="radio"
              id="accuracy1"
              name="accuracy"
              value="1"
              onChange={this.handleChange("accuracy")}
            />
            <label htmlFor="accuracy2">2</label>
            <input
              type="radio"
              id="accuracy2"
              name="accuracy"
              value="2"
              onChange={this.handleChange("accuracy")}
            />
            <label htmlFor="accuracy3">3</label>
            <input
              type="radio"
              id="accuracy3"
              name="accuracy"
              value="3"
              onChange={this.handleChange("accuracy")}
            />
            <label htmlFor="accuracy4">4</label>
            <input
              type="radio"
              id="accuracy4"
              name="accuracy"
              value="4"
              onChange={this.handleChange("accuracy")}
            />
            <label htmlFor="accuracy5">5</label>
            <input
              type="radio"
              id="accuracy5"
              name="accuracy"
              value="5"
              onChange={this.handleChange("accuracy")}
            />
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Location</h6>
            <label htmlFor="location1">1</label>
            <input
              type="radio"
              id="location1"
              name="location"
              value="1"
              onChange={this.handleChange("location")}
            />
            <label htmlFor="location2">2</label>
            <input
              type="radio"
              id="location2"
              name="location"
              value="2"
              onChange={this.handleChange("location")}
            />
            <label htmlFor="location3">3</label>
            <input
              type="radio"
              id="location3"
              name="location"
              value="3"
              onChange={this.handleChange("location")}
            />
            <label htmlFor="location4">4</label>
            <input
              type="radio"
              id="location4"
              name="location"
              value="4"
              onChange={this.handleChange("location")}
            />
            <label htmlFor="location5">5</label>
            <input
              type="radio"
              id="location5"
              name="location"
              value="5"
              onChange={this.handleChange("location")}
            />
          </div>
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Value</h6>
            <label htmlFor="value1">1</label>
            <input
              type="radio"
              id="value1"
              name="value"
              value="1"
              onChange={this.handleChange("value")}
            />
            <label htmlFor="value2">2</label>
            <input
              type="radio"
              id="value2"
              name="value"
              value="2"
              onChange={this.handleChange("value")}
            />
            <label htmlFor="value3">3</label>
            <input
              type="radio"
              id="value3"
              name="value"
              value="3"
              onChange={this.handleChange("value")}
            />
            <label htmlFor="value4">4</label>
            <input
              type="radio"
              id="value4"
              name="value"
              value="4"
              onChange={this.handleChange("value")}
            />
            <label htmlFor="value5">5</label>
            <input
              type="radio"
              id="value5"
              name="value"
              value="5"
              onChange={this.handleChange("value")}
            />
          </div>
          <button className="leave-review-button">Leave Review</button>
        </form>
      </div>
    );
  }
}

export default CreateReview;
