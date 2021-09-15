import React from "react";

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit - this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.setState({
      body: "",
      rating: "",
      guest_id: "",
      listing_id: "",
      cleanliness: "",
      communication: "",
      check_in: "",
      accuracy: "",
      location: "",
      value: "",
    });
  }

  render() {
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange("body")} />
        </form>
      </div>
    );
  }
}

export default CreateReview;
