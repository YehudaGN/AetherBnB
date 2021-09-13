import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class CreateBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.alreadyBooked = [];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAlreadyBooked();
  }

  setAlreadyBooked() {
    let that = this;
    this.props.bookedDates.forEach(dateSet => {
      let first = new Date(dateSet[0]);
      let last = new Date(dateSet[1]);
      const diff = (last - first) / (1000 * 3600 * 24);
      for (let i = 0; i < diff - 1; i++) {
        let temp = `${first.getFullYear()}/${first.getMonth() + 1}/${
          first.getDate() + 1
        }`;
        that.alreadyBooked.push(first);
        first = new Date(temp);
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

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
    let days =
      (this.state.end_date.getTime() - this.state.start_date.getTime()) /
      (1000 * 3600 * 24);
    this.setState({ price: days * this.props.listingPrice });
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
          disabledDates={this.alreadyBooked}
          rangeColors={["rgba(214, 30, 76, 0.945)"]}
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
