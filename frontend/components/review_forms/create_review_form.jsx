import React from "react";

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit - this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.setState({});
  }

  render() {
    return <div className="review-form-container">
        <form onSubmit={this.handleSubmit}>
            <textarea onChange={this.handleChange('body')}/>
        </form>
    </div>;
  }
}

export default CreateReview;
