import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class CreateBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (this.state.guest_id) {
    //     let price = (
    //         ((((Math.abs(new Date(this.state.end_date) - new Date(this.state.start_date)) / 1000) / 60) / 60) / 24) * this.props.listingPrice
    //         )
    //     this.setState({price: price}, () => this.props.createBooking(this.state).then(res => this.props.history.push(`/bookings/show/${res.booking.id}`)))

    // } else {
    //     this.props.openModal();
    // }
    if (this.state.guest_id) {
      this.props
        .createBooking(this.state)
        .then(res =>
          this.props.history.push(`/bookings/show/${res.booking.id}`)
        );
    } else {
      this.props.openModal();
    }
  }

  setTotalCost() {
    //   debugger
    let amount = (this.state.end_date.getTime() - this.state.start_date.getTime()) / (1000 * 3600 * 24)
    this.setState({price: amount * this.props.listingPrice})
  }

  handleChange(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value }, () =>
        this.setTotalCost()
      );
  }

  handleDates(e) {
    let { startDate, endDate } = e.selection;
    this.setState({ start_date: startDate, end_date: endDate });
  }

  render() {
    let selectionRange;

    if (this.state.start_date === "") {
      selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      };
    } else if (this.state.start_date !== "" && this.state.end_date === "") {
      selectionRange = {
        startDate: this.state.start_date,
        endDate: new Date(),
        key: "selection",
      };
    } else if (this.state.end_date !== "") {
      selectionRange = {
        startDate: this.state.start_date,
        endDate: this.state.end_date,
        key: "selection",
      };
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label>
          Start Date
          <input type="date" value={this.state.start_date} onChange={this.handleChange('start_date')} />
        </label>
        <label>
          End Date
          <input type="date" value={this.state.end_date} onChange={this.handleChange('end_date')} />
        </label> */}
        <DateRange
          ranges={[selectionRange]}
          onChange={e => this.handleDates(e)}
          editableDateInputs={true}
          showSelectionPreview={true}
          months={1}
          direction="vertical"
          showDateDisplay={false}
          showMonthAndYearPickers={true}
          minDate={new Date()}
          disabledDates={this.dateRange}
          // rangeColors={["blue"]}
        />
        <input
          type="number"
          placeholder="Number of Guests"
          value={this.state.num_guests}
          onChange={this.handleChange("num_guests")}
        />
        <p>Total Cost: {this.state.price}</p>
        <button>Book Listing</button>
      </form>
    );
  }
}

export default CreateBooking;
