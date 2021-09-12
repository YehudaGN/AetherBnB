import React from "react";

class CreateBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.guest_id) {
        let price = (
            ((((Math.abs(new Date(this.state.end_date) - new Date(this.state.start_date)) / 1000) / 60) / 60) / 24) * this.props.listingPrice
            )
        this.setState({price: price}, () => this.props.createBooking(this.state))
        
    } else {
        this.props.openModal();
    }
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Start Date
          <input type="date" value={this.state.start_date} onChange={this.handleChange('start_date')} />
        </label>
        <label>
          End Date
          <input type="date" value={this.state.end_date} onChange={this.handleChange('end_date')} />
        </label>
        <input type="number" placeholder='Number of Guests' value={this.state.num_guests} onChange={this.handleChange('num_guests')}/>
        <button>Book Listing</button>
      </form>
    );
  }
}

export default CreateBooking;